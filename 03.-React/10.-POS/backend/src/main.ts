/* eslint-disable @typescript-eslint/no-floating-promises */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
// Habilitar CORS
app.enableCors({
  origin: 'http://localhost:5173', // Cambia por tu frontend
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
});


  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
   }));
   app.useStaticAssets(__dirname + '/../public');// añadimos esta línea para que se pueda acceder a la carpeta public desde el navegador
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
