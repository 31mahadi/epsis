import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import * as morgan from 'morgan';

import { Request, Response } from 'express';
import { ROOTH_PATH_TEMPLATE } from './root-path';
import { SwaggerServerSetup } from './swagger-server-setup';
import {
  allowedOrigins,
  AUTHORIZATION,
  MS_DESCRIPTION,
  MS_NAME,
} from './constant';
// import { CorsOriginErrorFilter } from 'src/Core/cors.error';

export function rootPathResponse(app: any) {
  app.use((req: Request, res: Response, next: any) => {
    if (req.path === '/') {
      res.send(ROOTH_PATH_TEMPLATE);
      return;
    }
    next();
  });
}

export function setupSwagger(app: any) {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const version = packageJson.version;
  const swaggerSetup = new SwaggerServerSetup();
  const config = new DocumentBuilder()
    .setTitle(MS_NAME)
    .setDescription(MS_DESCRIPTION)
    .setVersion(version)
    .addBearerAuth(
      { type: 'apiKey', in: 'header', name: AUTHORIZATION },
      AUTHORIZATION,
    )
    .addServer(swaggerSetup.serverUrl, swaggerSetup.serverSign)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
}

export function setupAppConfig(app: any) {
  app.use(morgan('dev'));
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  app.enableCors({
    origin: allowedOrigins,
    credentials: true,
  });
}
