import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';
import {
  rootPathResponse,
  setupAppConfig,
  setupSwagger,
} from './utils/app.config';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  rootPathResponse(app);
  setupSwagger(app);
  setupAppConfig(app);

  await app.listen(process.env.PORT);
}
bootstrap();
