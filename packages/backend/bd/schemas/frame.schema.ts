import { Schema, model } from 'mongoose';
import { IFrame } from '../types';
import { randomUUID } from 'crypto';

const frameSchema = new Schema<IFrame>(
    {
        _id: { type: String, default: randomUUID },
        state: { type: Schema.Types.Mixed, default: {} },
        result: { type: Schema.Types.Mixed, default: {} },
        timestamp: { type: Number, default: Date.now },
        comment: { type: String, default: null }
    },
    { _id: false }
);

export const Frame = model('Frame', frameSchema);
