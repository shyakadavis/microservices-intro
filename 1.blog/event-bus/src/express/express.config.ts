import express, { Application } from 'express';
import cors from 'cors';
import eventRouter from './routes';

const ExpressConfig = (): Application => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.get('/', (req, res) => {
    res.json('🐒 Hello from the event service');
  });
  app.use(eventRouter);
  return app;
};
export default ExpressConfig;
