import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { bindFlmngr } from "@flmngr/flmngr-server-node-nest-express";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  bindFlmngr({
    app: app,
    urlFileManager: "/flmngr",
    urlFiles: "/files/",
    dirFiles: "./files"
  });

  await app.listen(3000);
}
bootstrap();
