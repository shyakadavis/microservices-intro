import { Router } from 'express';
import signUpRouter from './signup';
import signInRouter from './signin';
import currentUserRouter from './current-user';
import signOutRouter from './signout';

const router = Router();

router.use(signUpRouter);
router.use(signInRouter);
router.use(currentUserRouter);
router.use(signOutRouter);

export default router;
