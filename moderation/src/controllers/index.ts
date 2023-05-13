import { Request, Response } from 'express';
import axios from 'axios';

export const handleEvent = async (req: Request, res: Response) => {
  const { type, data } = req.body;

  if (type === 'CommentCreated') {
    const status = data.content.includes('orange') ? 'REJECTED' : 'APPROVED';

    await axios
      .post('http://localhost:8085/events', {
        type: 'CommentModerated',
        data: {
          ...data,
          status,
        },
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  res.send({});
};
