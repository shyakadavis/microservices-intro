import express, { Application } from 'express';
import 'express-async-errors';
import cookieSession from 'cookie-session';

import routes from '../routes';
import { errorHandler } from '../middleware';
import { NotFoundError } from '../errors';

const ExpressConfig = (): Application => {
  const app = express();
  app.set('trust proxy', true);
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(
    cookieSession({ signed: false, secure: process.env.NODE_ENV !== 'test' }),
  );
  app.get('/', (req, res) => {
    res.send({ message: 'Hi there!' });
  });
  app.use('/api/users', routes);
  app.all('*', async (req, res) => {
    throw new NotFoundError();
  });
  app.use(errorHandler);

  return app;
};

export default ExpressConfig;
