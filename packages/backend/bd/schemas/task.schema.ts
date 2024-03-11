import { Schema, model } from 'mongoose';
import { ITaskDB } from '../types';
import { randomUUID } from 'crypto';

const taskSchema = new Schema<ITaskDB>(
    {
        _id: { type: String, default: randomUUID },
        name: { type: String, required: true },
        description: { type: String, required: true },
        creatorId: { type: String, required: true },
        isAvailable: { type: Boolean, default: false },
        isApproved: { type: Boolean, default: false },
        settings: { type: Schema.Types.Mixed, default: {} },
        preview: { type: String, default: '' },
        timestamp: { type: Number, default: () => Date.now() }
    },
    { _id: false }
);

export const Task = model('Task', taskSchema);
