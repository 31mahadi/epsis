import { Response } from 'express';
import { HttpStatus } from '@nestjs/common';
import { ValidationError } from 'class-validator';

export interface ApiResponsePattern {
  statusCode: number;
  message?: string | any;
  data?: any;
  error?: string;
}

export function successResponse(
  res: Response,
  statusCode: number,
  message: string,
  data?: any,
): Response {
  const responseBody: ApiResponsePattern = {
    statusCode: statusCode,
    message: message,
    data: data,
  };
  return res.status(statusCode).json(responseBody);
}

export function errorResponse(res: Response, error?: any): Response {
  process.env.NODE_ENV === 'local' && console.log(error);
  let statusCode =
    error?.statusCode || error?.status || HttpStatus.INTERNAL_SERVER_ERROR;
  let errorMessage = error?.message || error?.response || 'Failed to add parts';

  if (
    Array.isArray(error) &&
    error.every((e) => e instanceof ValidationError)
  ) {
    errorMessage = formatValidationErrors(error);
    statusCode = HttpStatus.BAD_REQUEST;
  }

  const responseBody: ApiResponsePattern = {
    statusCode: statusCode,
    message: Array.isArray(errorMessage) ? errorMessage : [errorMessage],
  };

  return res?.status(statusCode).json(responseBody);
}

function formatValidationErrors(errors: ValidationError[]): string[] {
  return errors.map((error) => {
    const constraints = Object.values(error.constraints || {});
    return `${error.property}: ${constraints.join(', ')}`;
  });
}
