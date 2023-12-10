import { ISwitchHeadFrameResponse, ISwitchHeadFrameDto } from './switch-head-frame';
import { CLIENT_ERRORS, SERVER_ERRORS } from '../../../../domain/errors';
import { TController } from '../../../../domain/types';
import { Solution, Try, Frame } from '../../../../bd';
import { treeForwardTraversal } from '../../../../domain/utils';

export const switchHeadFrameController: TController<ISwitchHeadFrameDto> = async (req, resp) => {
    const { taskId, tryId, frameId } = req.body;

    let mutablePromiseRes;

    try {
        mutablePromiseRes = await Promise.all([
            Solution.findOne({ ownerId: req.user?._id, taskId }, 'tries'),
            Try.findOne({ _id: tryId }, 'headFrameId framesTree'),
            Frame.findOne({ _id: frameId })
        ]);
    } catch (e) {
        return resp.status(SERVER_ERRORS.BD_ERROR.code).json(SERVER_ERRORS.BD_ERROR);
    }

    let [solution, currentTry, frame] = mutablePromiseRes;

    if (!solution) {
        return resp
            .status(CLIENT_ERRORS.SOLUTION_DOESNT_EXIST.code)
            .json(CLIENT_ERRORS.SOLUTION_DOESNT_EXIST);
    }

    const isTryInTries = solution.tries.includes(tryId);

    if (!currentTry || !isTryInTries) {
        return resp.status(CLIENT_ERRORS.TRY_DOESNT_EXIST.code).json(CLIENT_ERRORS.TRY_DOESNT_EXIST);
    }

    const isFrameInFrameTree = Boolean(
        treeForwardTraversal(currentTry.framesTree, ({ _id }) => _id === frameId)
    );

    if (!frame || !isFrameInFrameTree) {
        return resp.status(CLIENT_ERRORS.FRAME_DOESNT_EXIST.code).json(CLIENT_ERRORS.FRAME_DOESNT_EXIST);
    }

    //TODO вопрос: случилась ошибка и пришел запрос на смену коммита из попытки, которая в базе не активна, а почему-то у пользователя активна
    //Я сейчас делаю смену попытки. Мб кидать ошибку?
    solution.currentTryId = tryId;
    currentTry.headFrameId = frameId;

    await Promise.all([solution.save(), currentTry.save()]);

    const response: ISwitchHeadFrameResponse = frame;

    resp.status(200).json(response);
};
