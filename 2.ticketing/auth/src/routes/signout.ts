import { Router } from 'express';

const signOutRouter = Router();

signOutRouter.post('/signout', (req, res) => {
  res.json('Hi there!');
});

export default signOutRouter;
