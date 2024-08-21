import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsDateString,
  ValidateNested,
  IsObject,
  IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { QA_Response } from '../../../Entities/Enum/QA_Resoinse';

class MachineDTO {
  @ApiProperty({
    description: 'Unique identifier for the machine.',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  id: number;
}

class UserDTO {
  @ApiProperty({
    description: 'Unique identifier for the user.',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  id: number;
}

export class SubmitDTO {
  @ApiProperty({
    description: 'The date of the submission in ISO 8601 format.',
    example: '2024-08-21T00:00:00Z',
  })
  @IsNotEmpty()
  @IsDateString()
  date: string;

  @ApiProperty({
    description:
      'Response for question 1. Must be one of the values from QA_Response enum.',
    example: QA_Response.YES,
    enum: QA_Response,
  })
  @IsNotEmpty()
  @IsEnum(QA_Response)
  q1: QA_Response;

  @ApiProperty({
    description:
      'Response for question 2. Must be one of the values from QA_Response enum.',
    example: QA_Response.NO,
    enum: QA_Response,
  })
  @IsNotEmpty()
  @IsEnum(QA_Response)
  q2: QA_Response;

  @ApiProperty({
    description:
      'Response for question 3. Must be one of the values from QA_Response enum.',
    example: QA_Response.YES,
    enum: QA_Response,
  })
  @IsNotEmpty()
  @IsEnum(QA_Response)
  q3: QA_Response;

  @ApiProperty({
    description:
      'Response for question 4. Must be one of the values from QA_Response enum.',
    example: QA_Response.NO,
    enum: QA_Response,
  })
  @IsNotEmpty()
  @IsEnum(QA_Response)
  q4: QA_Response;

  @ApiProperty({
    description:
      'Response for question 5. Must be one of the values from QA_Response enum.',
    example: QA_Response.YES,
    enum: QA_Response,
  })
  @IsNotEmpty()
  @IsEnum(QA_Response)
  q5: QA_Response;

  @ApiProperty({
    description: 'Machine information.',
    type: MachineDTO,
  })
  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => MachineDTO)
  machine: MachineDTO;

  @ApiProperty({
    description: 'User information.',
    type: UserDTO,
  })
  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => UserDTO)
  user: UserDTO;
}
