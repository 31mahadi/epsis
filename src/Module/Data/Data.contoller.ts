import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { DataService } from './Data.service';
import {
  ApiResponsePattern,
  errorResponse,
  successResponse,
} from '../../reponse_pattern/reponses';
import { Response } from 'express';
import { SubmitDTO } from './DTO/Submit.dto';
import { CollectDTO } from './DTO/Collect.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiCommonResponses } from '../../reponse_pattern/common.response';
import {
  Collect200ResponseDTO,
  Submit200ResponseDTO,
} from '../../reponse_pattern/example';

@ApiTags('Machine Production API')
@ApiCommonResponses()
@Controller('machine/production')
export class DataController {
  constructor(private readonly service: DataService) {}
  @Post('submit')
  @ApiOperation({ summary: 'Submit Machine Form Data' })
  @ApiBody({ type: SubmitDTO })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success!',
    type: Submit200ResponseDTO,
  })
  async submit(
    @Res() response: Response,
    @Body() SubmitDTO: SubmitDTO,
  ): Promise<ApiResponsePattern> {
    try {
      const submittedData = await this.service.submit(SubmitDTO);
      return successResponse(
        response,
        HttpStatus.OK,
        'Success!',
        submittedData,
      );
    } catch (error) {
      return errorResponse(response, error);
    }
  }

  @Get('collect')
  @ApiOperation({ summary: 'Collect Data' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success!',
    type: Collect200ResponseDTO,
  })
  async collect(@Res() response: Response, @Query() CollectDTO: CollectDTO) {
    try {
      const collectedData = await this.service.collect(CollectDTO);
      return successResponse(
        response,
        HttpStatus.OK,
        'Success!',
        collectedData,
      );
    } catch (error) {
      return errorResponse(response, error);
    }
  }
}
