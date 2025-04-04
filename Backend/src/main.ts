/* eslint-disable */

import { NestFactory } from '@nestjs/core';
import { MainModule } from './mainModule';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  
  app.setGlobalPrefix('api')
  const config = new DocumentBuilder()
    .setTitle("ToDo Api")
    .setDescription("First Swagger example")
    .setVersion('1.0')
    //.addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app,config);    
  SwaggerModule.setup('api',app,document);
  app.use('/swagger/json',(req,res)=>{
    res.json(document)
  })
  
  await app.listen(process.env.PORT ?? 3014);
}
bootstrap();
