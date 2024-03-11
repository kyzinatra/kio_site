import { ISwitchTryDto, ISwitchTryResponse } from './switch-try';
import { CLIENT_ERRORS, SERVER_ERRORS } from '../../../../domain/errors';
import { TController } from '../../../../domain/types';
import { Solution, Try, Frame, IFrame } from '../../../../bd';

export const switchTryController: TController<ISwitchTryDto> = async (req, resp) => {
    const { taskId, tryId } = req.body;

    let mutablePromiseRes;

    try {
        mutablePromiseRes = await Promise.all([
            Solution.findOne({ ownerId: req.user?._id, taskId }),
            Try.findOne({ _id: tryId })
        ]);
    } catch (e) {
        return resp.status(SERVER_ERRORS.BD_ERROR.code).json(SERVER_ERRORS.BD_ERROR);
    }

    let [solution, switchingTry] = mutablePromiseRes;

    if (!solution) {
        return resp
            .status(CLIENT_ERRORS.SOLUTION_DOESNT_EXIST.code)
            .json(CLIENT_ERRORS.SOLUTION_DOESNT_EXIST);
    }

    const isTryInTries = solution.tries.includes(tryId);

    if (!isTryInTries || !switchingTry) {
        return resp.status(CLIENT_ERRORS.TRY_DOESNT_EXIST.code).json(CLIENT_ERRORS.TRY_DOESNT_EXIST);
    }

    solution.currentTryId = tryId;

    await solution.save();

    try {
        mutablePromiseRes = await Promise.all([
            Try.find({ _id: { $in: solution.tries } }, '_id name'),
            Frame.findOne({ _id: switchingTry.headFrameId })
        ]);
    } catch (e) {
        return resp.status(SERVER_ERRORS.BD_ERROR.code).json(SERVER_ERRORS.BD_ERROR);
    }

    let [tries, frame] = mutablePromiseRes;

    const response: ISwitchTryResponse = {
        tries,
        currentTryId: solution.currentTryId,
        headFrameId: switchingTry.headFrameId,
        framesTree: switchingTry.framesTree,
        frame: frame as IFrame
    };

    resp.status(200).json(response);
};
