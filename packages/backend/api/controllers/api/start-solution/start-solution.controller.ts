import { IStartSolutionResponse, IStartSolutionDto } from './start-solution';
import { CLIENT_ERRORS, SERVER_ERRORS } from '../../../../domain/errors';
import { TController } from '../../../../domain/types';
import { Solution, Try, Frame } from '../../../../bd';
import { Task } from '../../../../bd/schemas/task.schema';

export const startSolutionController: TController<IStartSolutionDto> = async (req, resp) => {
    const { taskId } = req.body;

    let mutablePromiseRes;

    try {
        mutablePromiseRes = await Promise.all([
            Solution.findOne({ ownerId: req.user?._id, taskId }),
            Task.exists({ _id: taskId })
        ]);
    } catch (e) {
        return resp.status(SERVER_ERRORS.BD_ERROR.code).json(SERVER_ERRORS.BD_ERROR);
    }

    const [solution, task] = mutablePromiseRes;

    if (solution) {
        return resp
            .status(CLIENT_ERRORS.SOLUTION_ALREADY_EXIST.code)
            .json(CLIENT_ERRORS.SOLUTION_ALREADY_EXIST);
    }

    if (!task) {
        return resp.status(CLIENT_ERRORS.TASK_DOESNT_EXIST.code).json(CLIENT_ERRORS.TASK_DOESNT_EXIST);
    }

    const initialFrame = new Frame({
        comment: 'Initial empty frame'
    });

    const initialTry = new Try({
        framesTree: { parent: null, children: [], data: { _id: initialFrame._id } },
        headFrameId: initialFrame._id,
        name: 'Initial'
    });

    const newSolution = new Solution({
        taskId,
        ownerId: req.user?._id,
        tries: [initialTry._id],
        currentTryId: initialTry._id
    });

    await Promise.all([initialFrame.save(), initialTry.save(), newSolution.save()]);

    const response: IStartSolutionResponse = { status: 'ok' };

    resp.status(200).json(response);
};
