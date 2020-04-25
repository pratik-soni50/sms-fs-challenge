import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import dataRouter from './router/Data';

const startServer = async () => {
  await mongoose.connect('mongodb://localhost:27017/account', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });

  const app = express();
  app.use(cors());
  app.use(json());
  app.get('/', (req, res) => res.send('App is working fine'));
  app.use('/data', dataRouter);

  app.listen({ port: 8000 }, () => console.log('Running on http://localhost:8000'));
}

startServer();
