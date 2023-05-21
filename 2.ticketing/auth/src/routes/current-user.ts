import { Router } from 'express';

const currentUserRouter = Router();

currentUserRouter.get('/currentuser', (req, res) => {
  res.json('Hi there!');
});

export default currentUserRouter;
