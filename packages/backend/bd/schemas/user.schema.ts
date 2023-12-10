import mongoose from 'mongoose';
import { IUserBD } from '../types';

const userSchema = new mongoose.Schema<IUserBD>(
    {
        _id: String,
        name: { type: String, required: true },
        surname: { type: String, required: true },
        patronymic: { type: String, required: false },
        email: { type: String, required: true, unique: true },
        displayName: { type: String, required: true },
        avatarUrl: { type: String, required: false },
        phoneNumber: { type: String, required: false },
        studyPlace: { type: String, required: false },
        paymentStatus: { type: Boolean, required: false },
        connections: { type: [String], required: true },
        claims: { type: { role: String }, required: true },
        info: { type: { createdDate: Date, lastLoginDate: Date }, required: true },
        tasksId: { type: [String], required: true }
    },
    { _id: false }
);

export const User = mongoose.model('User', userSchema);
