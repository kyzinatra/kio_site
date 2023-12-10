import { Schema, model } from 'mongoose';
import { ITry } from '../types';
import { randomUUID } from 'crypto';

const trySchema = new Schema<ITry>(
    {
        headFrameId: { type: String, required: true },
        framesTree: { type: Schema.Types.Mixed, required: true },

        _id: { type: String, default: randomUUID },
        bestResult: { type: Schema.Types.Mixed, default: null },
        bestResultHeadFrameId: { type: String, default: null },
        name: { type: String, default: null },
        timestamp: { type: Number, default: Date.now }
    },
    { _id: false }
);

export const Try = model('Try', trySchema);
