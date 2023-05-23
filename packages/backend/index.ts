import express from 'express';
import * as mongoose from 'mongoose';
import cors from 'cors';
import { authRouter } from './api/routes/auth-router/auth-router';
import cookieParser from 'cookie-parser';
import { authMiddleware } from './domain/middleware/auth-middleware';
const app = express();
const port = 3001;

const MONGO_USERNAME = 'admin';
const MONGO_PASSWORD = 'admin';
const MONGO_HOSTNAME = 'mongodb';
const MONGO_PORT = '27017';
const MONGO_DB = 'site';

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.set('trust proxy', true);
app.use(authMiddleware);

app.use(authRouter);

app.listen(port, async () => {
    await mongoose.connect(url);

    console.log(`Example app listening on port ${port}`);
});
