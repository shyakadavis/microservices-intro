import { Router } from 'express';
import { handleEvent } from '../../controllers';

const eventRouter = Router();

eventRouter.post('/events', handleEvent);

export default eventRouter;
