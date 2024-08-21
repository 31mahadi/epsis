import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import * as morgan from 'morgan';
import { Request, Response } from 'express';
import { SwaggerServerSetup } from './swagger-server-setup';
import { allowedOrigins, MS_DESCRIPTION, MS_NAME } from './constant';

export function rootPathResponse(app: any) {
  app.use((req: Request, res: Response, next: any) => {
    if (req.path === '/') {
      res.redirect('/api-docs');
      return;
    }
    next();
  });
}

export function setupAppConfig(app: any) {
  app.use(morgan('dev'));
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.use(cookieParser());
  app.enableCors({
    origin: allowedOrigins,
    credentials: true,
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
    .addServer(swaggerSetup.serverUrl, swaggerSetup.serverSign)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
}
