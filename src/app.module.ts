import { Module } from '@nestjs/common';
import { IncrementController } from './increment.controller';
import { AppService } from './app.service';
import { GetController } from './get.controller';

@Module({
  imports: [],
  controllers: [IncrementController, GetController],
  providers: [AppService],
})
export class AppModule {}
