import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestMicroserviceOptions } from '@nestjs/common/interfaces/microservices/nest-microservice-options.interface';
import { Transport, ClientKafka } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<NestMicroserviceOptions>(
    AppModule,
    {
      Transport: Transport.KAFKA,
      options,
    },
  );
}
bootstrap();
