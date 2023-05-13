import { Request, Response } from 'express';
import { Post } from '../../../utils';

const posts = new Map<string, Post>();

export const handleSingleEvent = (type: string, data: any) => {
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
    const { id, content, postId, status } = data;
    const post = posts.get(postId);
    post?.comments.push({
      id,
      content,
      status,
    });
  }

  if (type === 'CommentUpdated') {
    const { id, content, postId, status } = data;
    const post = posts.get(postId);
    const comment = post?.comments.find((comment) => comment.id === id);
    if (comment) {
      comment.status = status;
      comment.content = content;
    }
  }
};
export const handlePosts = async (req: Request, res: Response) => {
  res.json(Array.from(posts.values()));
};

export const handleEvents = async (req: Request, res: Response) => {
  const { type, data } = req.body;

  handleSingleEvent(type, data);

  res.json({});
};
