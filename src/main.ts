import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configService } from './config/config.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (!configService.isProduction()) {
    const document = SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle('Emergency Electric INC')
        .setDescription('Emergency Electric INC API')
        .addTag('Emergency Electric')
        .setVersion('1.0')
        .build(),
    );

    SwaggerModule.setup('docs', app, document);
  }
  await app.listen(3000);
}
bootstrap();
