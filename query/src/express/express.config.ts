import express, { Application } from 'express';
import cors from 'cors';
import postsRouter from './routes';

const ExpressConfig = (): Application => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.get('/', (req, res) => {
    res.json('🐒 Hello from the posts feature');
  });
  app.use(postsRouter);
  return app;
};
export default ExpressConfig;
