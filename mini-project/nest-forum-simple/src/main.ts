import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { HandlebarsHelperModule } from './config/handlebars-helper.module';
import { join } from 'path';
import { existsSync } from 'fs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public')); // 정적 파일 서비스
  app.setBaseViewsDir(join(__dirname, '..', 'views')); // 뷰 파일 경로 설정
  app.setViewEngine('hbs'); // 뷰 엔진 설정
  HandlebarsHelperModule();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
