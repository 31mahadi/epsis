import { IsNotEmpty, IsDateString, IsEnum, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { MachineType } from '../../../Entities/Enum/MachineType';

export class CollectDTO {
  @ApiProperty({
    description: 'Start date for the query in ISO format',
    example: '2024-08-01',
  })
  @IsNotEmpty()
  @IsDateString()
  from: string;

  @ApiProperty({
    description: 'End date for the query in ISO format',
    example: '2024-08-31',
  })
  @IsNotEmpty()
  @IsDateString()
  to: string;

  @ApiProperty({
    description:
      'Type of the machine. Should be one of the values from MachineType enum.',
    example: 'TYPE_A',
    enum: MachineType,
  })
  @IsNotEmpty()
  @IsEnum(MachineType)
  machine_type: MachineType;

  @ApiPropertyOptional({
    description: 'Employee ID. Optional query parameter.',
    example: 'EMP1234',
  })
  @IsOptional()
  emp_id?: string;
}
