import { Router } from 'express';
import { allPosts, createPost } from '../../controllers';

const postsRouter = Router();

postsRouter.get('/posts', allPosts);

postsRouter.post('/posts', createPost);

export default postsRouter;
