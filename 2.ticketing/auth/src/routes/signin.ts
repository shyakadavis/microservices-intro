import { Router } from 'express';

const signInRouter = Router();

signInRouter.post('/signin', (req, res) => {
  res.json('Hi there!');
});

export default signInRouter;
