import express, { Application } from 'express';
import commentsRouter from './routes';

const ExpressConfig = (): Application => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.get('/', (req, res) => {
    res.json('🐒 Hello from the comments service');
  });
  app.use(commentsRouter);
  return app;
};
export default ExpressConfig;
