import express from 'express';
import * as mongoose from 'mongoose';
import cors from 'cors';
import { authRouter, lkRouter } from './api';
import cookieParser from 'cookie-parser';
import { authMiddleware } from './domain/middleware';
const app = express();

const port = process.env.PORT ?? 3001;
const url = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?authSource=admin`;

app.use(cors({ origin: process.env.FRONT_DEV_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser('secret'));
app.set('trust proxy', true);
app.use(authMiddleware);

app.use(authRouter);
app.use(lkRouter);

app.listen(port, async () => {
    await mongoose.connect(url);

    console.log(`App listening on port ${port}`);
});
