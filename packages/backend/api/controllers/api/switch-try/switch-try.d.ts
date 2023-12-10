import { ITree } from '../../../../domain/types';
import { IFrame } from '../../../../bd';

export interface ISwitchTryDto {
    taskId: string;
    tryId: string;
}

export interface ISwitchTryResponse {
    tries: { name: string; _id: string }[];
    currentTryId: string;
    framesTree: ITree<{ _id: string }>;
    headFrameId: string;
    frame: IFrame;
}
