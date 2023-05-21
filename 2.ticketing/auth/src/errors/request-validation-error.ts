import { ZodError } from 'zod';
import { CustomError } from './custom-error';

export class RequestValidationError extends CustomError {
  statusCode = 400;
  constructor(public errors: ZodError) {
    super('Invalid request parameters');
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
  serializeErrors() {
    return this.errors.issues.map((error) => {
      const field = error.path.join('.').split('.')[1];
      const message = error.message;
      return { message, field };
    });
  }
}
