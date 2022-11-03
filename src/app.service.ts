import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database/database.service';

@Injectable()
export class AppService {
  async getCars(): Promise<any> {
    const pool = new DatabaseService();
    const res = pool.executeQuery(`SELECT * FROM cars`);
    return res;
  }
}
