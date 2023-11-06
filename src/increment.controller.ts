import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('increment')
export class IncrementController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async postCounter(): Promise<string> {
    const counter = await this.appService.postCounter();
    return counter;
  }
}
