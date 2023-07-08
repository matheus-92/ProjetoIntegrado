// import 'reflect-metadata';
// import 'express-async-errors';
import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { router } from './routes';
const { log } = console;
export const app = express();

const port = process.env.API_PORT || 3001;

app.use(express.json());

app.use(cors());

app.use(router);

app.listen(port, () => {
    log(`Express server listening on port ${port}`);
});
