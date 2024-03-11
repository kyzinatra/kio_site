import { INewTryResponse, INewTryDto } from './new-try';
import { CLIENT_ERRORS, SERVER_ERRORS } from '../../../../domain/errors';
import { TController } from '../../../../domain/types';
import { Solution, Try, Frame } from '../../../../bd';

export const newTryController: TController<INewTryDto> = async (req, resp) => {
    const { taskId, name } = req.body;

    let solution;

    try {
        solution = await Solution.findOne({ ownerId: req.user?._id, taskId });
    } catch (e) {
        return resp.status(SERVER_ERRORS.BD_ERROR.code).json(SERVER_ERRORS.BD_ERROR);
    }

    if (!solution) {
        return resp
            .status(CLIENT_ERRORS.SOLUTION_DOESNT_EXIST.code)
            .json(CLIENT_ERRORS.SOLUTION_DOESNT_EXIST);
    }

    const initialFrame = await new Frame({
        comment: 'Initial empty frame'
    }).save();

    const newTry = await new Try({
        framesTree: { parent: null, children: [], data: { _id: initialFrame._id } },
        headFrameId: initialFrame._id,
        name: name ?? 'Initial'
    }).save();

    solution.tries.push(newTry._id);
    solution.currentTryId = newTry._id;
    solution.markModified('tries');

    await solution.save();

    const response: INewTryResponse = { tryId: newTry._id };

    resp.status(200).json(response);
};
