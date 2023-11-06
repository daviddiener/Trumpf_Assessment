import { Injectable } from '@nestjs/common';
import * as fsPromise from 'fs/promises';

@Injectable()
export class AppService {
  async postCounter(): Promise<string> {
    try {
      const filePath = '/dev/shm/counter.txt';
      let counter = 0;

      // Check if the file exists, and read its content
      try {
        const data = await fsPromise.readFile(filePath, 'utf8');
        counter = +data;
      } catch (readErr) {
        // If the file doesn't exist, create it with an initial value of 0
        await fsPromise.writeFile(filePath, counter.toString(), 'utf8');
      }

      // Increment the counter
      counter++;

      // Write the updated counter back to the file
      await fsPromise.writeFile(filePath, counter.toString(), 'utf8');

      return 'Pod: ' + this.getPodName() + ': ' + counter;
    } catch (err) {
      throw err;
    }
  }

  async getCounter(): Promise<string> {
    try {
      const filePath = '/dev/shm/counter.txt';
      let counter = 0;

      // Check if the file exists, and read its content
      try {
        const data = await fsPromise.readFile(filePath, 'utf8');
        counter = +data;
      } catch (readErr) {
        // If the file doesn't exist, create it with an initial value of 0
        await fsPromise.writeFile(filePath, '0', 'utf8');
      }

      return 'Pod: ' + this.getPodName() + ': ' + counter;
    } catch (err) {
      throw err;
    }
  }

  getPodName(): string {
    return process.env.HOSTNAME ?? 'Name not set';
  }
}
