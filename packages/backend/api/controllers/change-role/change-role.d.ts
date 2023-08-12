import { ISuccessResponse } from '#domain/types';
import { ERoles } from '#bd';

export interface IChangeRoleDto {
    userId: string;
    role: ERoles;
}

export interface IChangeRoleResponse extends ISuccessResponse {}
