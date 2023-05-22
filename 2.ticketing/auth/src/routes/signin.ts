import { Request, Response, Router } from 'express';
import { z } from 'zod';
import jwt from 'jsonwebtoken';

import { validate } from '../middleware';
import { User } from '../models';
import { BadRequestError } from '../errors';
import { Password } from '../services';

// TODO: Sanitize input, especially when it comes to trimming whitespace

const signInSchema = z.object({
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
      .min(1, {
        message: 'Password is required',
      }),
  }),
});

const signInRouter = Router();

signInRouter.post(
  '/signin',
  validate(signInSchema),
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) throw new BadRequestError('Invalid credentials');
    const passwordsMatch = await Password.compare(
      existingUser.password,
      password,
    );
    if (!passwordsMatch) throw new BadRequestError('Invalid credentials');
    const userJwt = jwt.sign(
      {
        id: existingUser.id,
        email: existingUser.email,
      },
      process.env.JWT_KEY!,
    );
    req.session = { jwt: userJwt };
    res.status(200).send(existingUser);
  },
);

export default signInRouter;
