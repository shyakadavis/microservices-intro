import { Router } from 'express';
import { allPosts, createPost, handleEvent } from '../../controllers';

const postsRouter = Router();

postsRouter.get('/posts', allPosts);

postsRouter.post('/posts/create', createPost);

postsRouter.post('/events', handleEvent);

export default postsRouter;
