import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import setupDatabase from './utils/setUpDatabase';
import dataRouter from './router/Data';

const startServer = async () => {
  await setupDatabase();

  const app = express();
  app.use(cors());
  app.use(json());
  app.get('/', (req, res) => res.send('App is working fine'));
  app.use('/data', dataRouter);

  app.listen({ port: 8000 }, () => console.log('Running on http://localhost:8000'));
}

startServer();
