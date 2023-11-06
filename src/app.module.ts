import { Module } from '@nestjs/common';
import { IncrementController } from './increment.controller';
import { AppService } from './app.service';
import { GetController } from './get.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Counter, CounterDocument } from './schemas/counter.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongodb-trumpf:27017', {dbName: 'data',}),
    MongooseModule.forFeature([{ name: Counter.name, schema: CounterDocument }])],
  controllers: [IncrementController, GetController],
  providers: [AppService],
})
export class AppModule {}
