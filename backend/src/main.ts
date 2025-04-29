import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // transforma o body em uma instância da classe
      whitelist: true, // remove propriedades que não estão no DTO
      forbidNonWhitelisted: true, // lança erro se houver propriedades extras
    }),
  );
  app.enableCors({
    origin: 'http://localhost:3001'
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
