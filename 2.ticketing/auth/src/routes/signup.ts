import { Router } from 'express';
import { z } from 'zod';
import jwt from 'jsonwebtoken';

import { validate } from '../middleware';
import { User } from '../models';
import { BadRequestError } from '../errors';

// TODO: Sanitize input, especially when it comes to trimming whitespace

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
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new BadRequestError('Email in use');
  const user = User.build({ email, password });
  await user.save();
  const userJwt = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_KEY!,
  );
  req.session = { jwt: userJwt };
  res.status(201).send(user);
});

export default signUpRouter;
