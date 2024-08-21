import { ApiProperty } from '@nestjs/swagger';

export class Collect200ResponseDTO {
  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ example: 'Success!' })
  message: string;

  @ApiProperty({ example: {} })
  data: [
    {
      date: '2024-08-23T00:00:00.000Z';
      q1: 'not-mandatory';
      q2: 'no';
      q3: 'no';
      q4: 'no';
      q5: 'no';
      machine: {
        machine_name: 'Machine 50';
        machine_type: 'packer';
      };
      user: {
        name: 'User 3';
        emp_id: 'EMP3';
      };
    },
  ];
}

export class Submit200ResponseDTO {
  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ example: 'Success!' })
  message: string;

  @ApiProperty({ example: {} })
  data: {
    date: '2024-08-22';
    q1: 'yes';
    q2: 'no';
    q3: 'not-mandatory';
    q4: 'not-mandatory';
    q5: 'no';
    machine: {
      id: 1;
    };
    user: {
      id: 1;
    };
    id: 1003;
    created_at: '2024-08-21T23:34:50.110Z';
  };
}

export class Response400DTO {
  @ApiProperty({ example: 400 })
  statusCode: number;

  @ApiProperty({ required: false, example: 'Bad Request!' })
  error: string;

  @ApiProperty({
    example: ['Error 1', 'Error 2'],
    description: 'This Can be list of string or stirng. handle accordingly.',
  })
  message: string[];
}

export class Response401DTO {
  @ApiProperty({ example: 401 })
  statusCode: number;

  @ApiProperty({ required: false, example: 'Unauthorised!' })
  error: string;

  @ApiProperty({
    example: [
      'Authorization header is missing or token is not inserted',
      'You need to have the necessary permissions and access levels for this action',
    ],
    description: 'This Can be list of string or stirng. handle accordingly.',
  })
  message?: string[];
}

export class Response403DTO {
  @ApiProperty({ example: 403 })
  statusCode: number;

  @ApiProperty({ required: false, example: 'Unauthorised!' })
  error: string;

  @ApiProperty({
    example: ['Insufficient permissions', 'Error 1', 'Error 2'],
    description: 'This Can be list of string or stirng. handle accordingly.',
  })
  message?: string[];
}

export class Response406DTO {
  @ApiProperty({ example: 406 })
  statusCode: number;

  @ApiProperty({ required: false, example: 'Not Acceptable!' })
  error: string;

  @ApiProperty({
    example: ['Profile Missing For the User!'],
    description: 'This Can be list of string or stirng. handle accordingly.',
  })
  message?: string[];
}

export class Response500DTO {
  @ApiProperty({ example: 500 })
  statusCode: number;

  @ApiProperty({ required: false, example: 'Internal Server Error' })
  error: string;

  @ApiProperty({
    example: ['Error 1', 'Error 2'],
    description: 'This Can be list of string or stirng. handle accordingly.',
  })
  message?: string[];
}
