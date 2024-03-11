import { Schema, model } from 'mongoose';
import { ISolutionDB } from '../types';
import { randomUUID } from 'crypto';

const solutionSchema = new Schema<ISolutionDB>(
    {
        tries: { type: [String], required: true },
        ownerId: { type: String, required: true },
        taskId: { type: String, required: true },
        currentTryId: { type: String, required: true },

        bestTryId: { type: String, default: null },
        timestamp: { type: Number, default: Date.now },
        _id: { type: String, default: randomUUID }
    },
    { _id: false }
);

export const Solution = model('Solution', solutionSchema);
