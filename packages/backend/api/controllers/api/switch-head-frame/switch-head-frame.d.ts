import { IFrame } from '../../../../bd';

export interface ISwitchHeadFrameDto {
    taskId: string;
    tryId: string;
    frameId: string;
}

export interface ISwitchHeadFrameResponse extends IFrame {}
