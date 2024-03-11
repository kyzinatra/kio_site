import { ICommitDtoResponse, ICommitDto } from './commit';
import { CLIENT_ERRORS, SERVER_ERRORS } from '../../../../domain/errors';
import { TController } from '../../../../domain/types';
import { Solution, Try, Frame } from '../../../../bd';
import { treeForwardTraversal } from '../../../../domain/utils';

export const commitController: TController<ICommitDto> = async (req, resp) => {
    const { taskId, parentId, tryId, comment, state, result } = req.body;

    let res;

    try {
        res = await Promise.all([
            Solution.findOne({ ownerId: req.user?._id, taskId }),
            Try.findOne({ _id: tryId }),
            Frame.findOne({ _id: parentId }, '-state -result')
        ]);
    } catch (e) {
        return resp.status(SERVER_ERRORS.BD_ERROR.code).json(SERVER_ERRORS.BD_ERROR);
    }

    let [solution, currentTry, parentFrame] = res;

    if (!solution || !currentTry || !parentFrame) {
        return resp
            .status(CLIENT_ERRORS.SOLUTION_DOESNT_EXIST.code)
            .json(CLIENT_ERRORS.SOLUTION_DOESNT_EXIST);
    }

    const parentTreeNode = treeForwardTraversal(currentTry.framesTree, ({ _id }) => _id === parentId);

    if (!parentTreeNode) {
        return resp.status(CLIENT_ERRORS.FRAME_DOESNT_EXIST.code).json(CLIENT_ERRORS.FRAME_DOESNT_EXIST);
    }

    const newFrame = new Frame({ state, result, comment: comment ?? null });

    parentTreeNode.children.push({
        parent: { data: { _id: parentTreeNode.data._id } },
        data: { _id: newFrame._id },
        children: []
    });

    solution.currentTryId = tryId;
    currentTry.headFrameId = newFrame._id;

    currentTry.markModified('framesTree');

    await Promise.all([solution.save(), currentTry.save(), newFrame.save()]);

    const response: ICommitDtoResponse = { status: 'ok' };

    resp.status(200).json(response);
};
