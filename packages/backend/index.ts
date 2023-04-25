import express from 'express';
import * as mongoose from 'mongoose';
import cors from 'cors';
const app = express();
const port = 3001;

const MONGO_USERNAME = 'admin';
const MONGO_PASSWORD = 'admin';
const MONGO_HOSTNAME = 'mongodb';
const MONGO_PORT = '27017';
const MONGO_DB = 'site';

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

const catSchema = new mongoose.Schema<{ name: string }>({
    name: { type: String, required: true }
});

const Cat = mongoose.model('Cat', catSchema);

app.use(cors());
app.use(express.json());

app.get('/get-cats-amount', async (req, res) => {
    const cats = await Cat.find().count();

    res.json(`${cats}`).status(200);
});

app.listen(port, async () => {
    await mongoose.connect(url);

    console.log(`Example app listening on port ${port}`);
});
