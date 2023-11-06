import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Counter } from './schemas/counter.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(Counter.name) private counterModel: Model<Counter>) {}

  async postCounter(): Promise<string> {
    try {
      const counter = await this.counterModel.findOneAndUpdate({}, { $inc: { value: 1 } }, { upsert: true, new: true });

      return 'Pod: ' + this.getPodName() + ': ' + counter.value;
    } catch (err) {
      throw err;
    }
  }

  async getCounter(): Promise<string> {
    try {
      const counter = await this.counterModel.findOne();
      const value = counter ? counter.value : 0;

      return 'Pod: ' + this.getPodName() + ': ' + value;
    } catch (err) {
      throw err;
    }
  }

  getPodName(): string {
    return process.env.HOSTNAME ?? 'Name not set';
  }
}
