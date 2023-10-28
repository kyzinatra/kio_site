import { TRole } from './role.type';

export interface IUserBD {
    _id: string;
    name: string;
    surname: string;
    patronymic: string;
    email: string;
    passHash: string;
    displayName: string;
    avatarUrl: string;
    phoneNumber: string;
    studyPlace: string;
    paymentStatus?: boolean;
    connections: ('VK' | 'GOOGLE' | 'GITHUB')[];
    claims: {
        role: TRole;
    };
    info: {
        createdDate: Date;
        lastLoginDate: Date;
    };
    tasksId: string[];
}
