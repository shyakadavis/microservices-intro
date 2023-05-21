import { Router } from 'express';
import { z } from 'zod';
import { validate } from '../middleware';
import { DatabaseConnectionError } from '../errors';

const signUpSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email({
        message: 'Please enter a valid email',
      }),
    password: z
      .string({
        required_error: 'Password is required',
      })
      .trim()
      .min(7, {
        message: 'Password must be at least 7 characters long',
      })
      .max(21, {
        message: 'Password must be at most 21 characters long',
      })
      .trim(),
  }),
});

const signUpRouter = Router();

signUpRouter.post('/signup', validate(signUpSchema), async (req, res) => {
  const { email, password } = req.body;
  throw new DatabaseConnectionError();
  res.send({ email, password });
});

export default signUpRouter;
