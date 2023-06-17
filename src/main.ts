import { NestFactory } from '@nestjs/core';
import express from 'express';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {NestExpressApplication} from "@nestjs/platform-express"
import { join } from 'path';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Food magazine Backend apis')
    .setDescription('Food magazine uchun backend.')
    .setVersion('1.0')
    .addTag('foodMagazine')
    .addBearerAuth()
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  app.enableCors()

  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/',
  });
  await app.listen(3000);
}
bootstrap();
