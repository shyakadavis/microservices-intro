import { Router } from 'express';
import { allComments, createComment } from '../../controllers';

const commentsRouter = Router();

commentsRouter.get('/posts/:postId/comments', allComments);

commentsRouter.post('/posts/:postId/comments', createComment);

export default commentsRouter;
