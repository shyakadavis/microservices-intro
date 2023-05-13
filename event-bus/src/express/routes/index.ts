import { Router } from 'express';
import { getEvents, handleEvent } from '../../controllers';

const eventRouter = Router();

eventRouter.post('/events', handleEvent);

eventRouter.get('/events', getEvents);

export default eventRouter;
