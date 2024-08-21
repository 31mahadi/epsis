import { applyDecorators } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import {
  Response400DTO,
  Response401DTO,
  Response403DTO,
  Response406DTO,
  Response500DTO,
} from '../reponse_pattern/example';

export function ApiCommonResponses() {
  return applyDecorators(
    ApiResponse({
      status: 400,
      description: 'Bad Request.',
      type: Response400DTO,
    }),
    ApiResponse({
      status: 401,
      description: 'Unauthorised!.',
      type: Response401DTO,
    }),
    ApiResponse({
      status: 403,
      description: 'Unauthorised!',
      type: Response403DTO,
    }),
    ApiResponse({
      status: 406,
      description: 'Not Acceptable!.',
      type: Response406DTO,
    }),
    ApiResponse({
      status: 500,
      description: 'Internal Server Error.',
      type: Response500DTO,
    }),
  );
}
