import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/');

  app.enableCors({
    origin: ['*'],
    methods: '*',
    // allowedHeaders: 'Content-Type, Accept, Authorization',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('allInOne')
    .setDescription('The allInOne API description')
    .setVersion('1.0')
    .addTag('allInOne')
    .build();


  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory, {
    jsonDocumentUrl: 'docs.json',
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
