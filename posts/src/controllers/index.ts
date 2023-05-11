// ! Since this is a simple app to help me understand the concept of microservices,
// ! I will not be using any database. Everything will be stored in memory.
// ! The downside is that if the server restarts, all data will be lost.

import { Request, Response } from 'express';
import { randomBytes } from 'crypto';

type Post = {
  id: string;
  title: string;
  content: string;
};

const posts = new Map<string, Post>();

export const allPosts = (req: Request, res: Response) => {
  res.json(Array.from(posts.values()));
};

export const createPost = (req: Request, res: Response) => {
  const { title, content } = req.body;
  const id = randomBytes(4).toString('hex');
  const newPost = {
    id,
    title,
    content,
  };
  posts.set(id, newPost);
  res.json(newPost);
};
