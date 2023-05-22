import { Router } from 'express';
import { currentUser } from '../middleware';

const currentUserRouter = Router();

currentUserRouter.get('/currentuser', currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || null });
});

export default currentUserRouter;
