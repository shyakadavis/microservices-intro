// ! Since this is a simple app to help me understand the concept of microservices,
// ! I will not be using any database. Everything will be stored in memory.
// ! The downside is that if the server restarts, all data will be lost.

import { Request, Response } from 'express';
import { randomBytes } from 'crypto';
import axios from 'axios';
import { log } from 'console';
import { Post } from '../../../utils';

const posts = new Map<string, Post>();

export const allPosts = (req: Request, res: Response) => {
  res.json(Array.from(posts.values()));
};

export const createPost = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  const id = randomBytes(4).toString('hex');
  const newPost = {
    id,
    title,
    content,
    comments: [],
  };
  posts.set(id, newPost);
  await axios
    .post('http://localhost:8085/events', {
      type: 'PostCreated',
      data: newPost,
    })
    .catch((err) => console.error(err.message));
  res.status(201).json(newPost);
};

export const handleEvent = (req: Request, res: Response) => {
  log('Event Received:', req.body.type);
  res.send({});
};
