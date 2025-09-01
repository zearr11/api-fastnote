import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APP_PORT } from './config/env.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  await app.listen(APP_PORT ?? 3000);
}

bootstrap();
