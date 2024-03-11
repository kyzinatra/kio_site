import { ISuccessResponse } from '../../../domain/types/success-anwer.interface';
import { ERoles } from '../../../../bd';

export interface IChangeRoleDto {
    userId: string;
    role: ERoles;
}

export interface IChangeRoleResponse extends ISuccessResponse {}
