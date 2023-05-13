// ! Since this is a simple app to help me understand the concept of microservices,
// ! I will not be using any database. Everything will be stored in memory.
// ! The downside is that if the server restarts, all data will be lost.

import { Request, Response } from 'express';
import { randomBytes } from 'crypto';
import axios from 'axios';
import { log } from 'console';
import { Comment } from '../../../utils';

const comments = new Map<string, Comment[]>();

export const allComments = (req: Request, res: Response) => {
  const { postId } = req.params;
  const allComments = comments.get(postId) || [];
  res.status(200).json(allComments);
};

export const createComment = async (req: Request, res: Response) => {
  const { content } = req.body;
  const { postId } = req.params;
  const id = randomBytes(4).toString('hex');
  const newComment = {
    id,
    content,
    status: 'PENDING',
  } satisfies Comment;
  const oldComments = comments.get(postId) || [];
  const newComments = [...oldComments, newComment];
  comments.set(postId, newComments);
  await axios
    .post('http://localhost:8085/events', {
      type: 'CommentCreated',
      data: {
        ...newComment,
        postId,
      },
    })
    .catch((err) => console.error(err.message));
  res.status(201).json(newComment);
};

export const handleEvent = (req: Request, res: Response) => {
  log('Event Received:', req.body.type);
  res.send({});
};
