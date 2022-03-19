import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('message')
  async sendMessage(@Body() body) {
    const { topic, data, key } = body;

    return this.appService.sendMessage(topic, data, key);
  }
}
