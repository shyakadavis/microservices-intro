import { Router } from 'express';
import { handlePosts, handleEvents } from '../../controllers';

const postsRouter = Router();

postsRouter.get('/posts', handlePosts);

postsRouter.post('/events', handleEvents);

export default postsRouter;
