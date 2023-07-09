import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getFlmngrExample(): string {
    return require('fs').readFileSync('./public/flmngr-example.html', 'utf8');
  }

  @Get('flmngr-example.js')
  @Header('content-type', 'text/javascript')
  getFlmngrExampleJs(): string {
    return require('fs').readFileSync('./public/flmngr-example.js', 'utf8');
  }
}
