import { Router } from 'express';

const signOutRouter = Router();

signOutRouter.post('/signout', (req, res) => {
  req.session = null;
  res.send({});
});

export default signOutRouter;
