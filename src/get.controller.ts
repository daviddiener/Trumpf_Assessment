import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('get')
export class GetController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getCounter(): Promise<string> {
    const counter = await this.appService.getCounter();
    return counter;
  }
}
