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

  let HOST = '127.0.0.1';
  let PORT = 3000;
  await app.listen(PORT, HOST);

  // Server started successfully
  console.log("Nest server with Flmngr started")
  console.log("Flmngr.urlFileManager = \"http://" + HOST + ":" + PORT + "/flmngr\"");
  console.log("Live demo: http://" + HOST + ":" + PORT + "");
}
bootstrap();
