import type { NextFunction, Request, Response } from 'express';
import { Schema, ZodError } from 'zod';
import { RequestValidationError } from '../errors';

export const validate =
  (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      next();
    } catch (error: ZodError | any) {
      throw new RequestValidationError(error);
    }
  };
