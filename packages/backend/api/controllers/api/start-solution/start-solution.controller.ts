import { IStartSolutionResponse, IStartSolutionDto } from './start-solution';
import { CLIENT_ERRORS, SERVER_ERRORS } from '../../../../domain/errors';
import { TController } from '../../../../domain/types';
import { Solution, Try, Frame } from '../../../../bd';

export const startSolutionController: TController<IStartSolutionDto> = async (req, resp) => {
    const { taskId } = req.body;

    let solution;

    try {
        solution = await Solution.findOne({ ownerId: req.user?._id, taskId });
    } catch (e) {
        return resp.status(SERVER_ERRORS.BD_ERROR.code).json(SERVER_ERRORS.BD_ERROR);
    }

    if (solution) {
        return resp
            .status(CLIENT_ERRORS.SOLUTION_ALREADY_EXIST.code)
            .json(CLIENT_ERRORS.SOLUTION_ALREADY_EXIST);
    }

    const initialFrame = await new Frame({
        comment: 'Initial empty frame'
    }).save();
    const initialTry = await new Try({
        framesTree: { parent: null, children: [], data: { _id: initialFrame._id } },
        headFrameId: initialFrame._id,
        name: 'Initial'
    }).save();

    await new Solution({
        taskId,
        ownerId: req.user?._id,
        tries: [initialTry._id],
        currentTryId: initialTry._id
    }).save();

    const response: IStartSolutionResponse = { status: 'ok' };

    resp.status(200).json(response);
};
