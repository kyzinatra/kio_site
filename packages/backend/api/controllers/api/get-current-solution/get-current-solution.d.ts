import { ITree } from '../../../../domain/types';
import { IFrame } from '../../../../bd';

export interface IGetCurrentSolutionDto {
    taskId: string;
}

export interface IGetCurrentSolutionResponse {
    tries: { name: string; _id: string }[];
    currentTryId: string;
    framesTree: ITree<{ _id: string }>;
    headFrameId: string;
    frame: IFrame;
}
