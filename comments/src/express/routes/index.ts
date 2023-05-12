import { Router } from 'express';
import { allComments, createComment, handleEvent } from '../../controllers';

const commentsRouter = Router();

commentsRouter.get('/posts/:postId/comments', allComments);

commentsRouter.post('/posts/:postId/comments', createComment);

commentsRouter.post('/events', handleEvent);

export default commentsRouter;
