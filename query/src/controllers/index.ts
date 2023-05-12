import { Request, Response } from 'express';

type Post = {
  id: string;
  title: string;
  content: string;
  comments: Comment[];
};

type Comment = {
  id: string;
  content: string;
};

const posts = new Map<string, Post>();
export const handlePosts = async (req: Request, res: Response) => {
  res.json(Array.from(posts.values()));
};

export const handleEvents = async (req: Request, res: Response) => {
  const { type, data } = req.body;

  if (type === 'PostCreated') {
    const { id, title, content } = data;
    posts.set(id, {
      id,
      title,
      content,
      comments: [],
    });
  }

  if (type === 'CommentCreated') {
    const { id, content, postId } = data;
    const post = posts.get(postId);
    post?.comments.push({
      id,
      content,
    });
  }

  res.json({});
};
