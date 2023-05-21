import express, { Application } from 'express';
import 'express-async-errors';
import routes from '../routes';
import { errorHandler } from '../middleware';
import { NotFoundError } from '../errors';

const ExpressConfig = (): Application => {
  const app = express();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

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
