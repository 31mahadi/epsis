import { DataSource } from 'typeorm';
import { Users } from './Entities/User.entity';
import { Machine } from './Entities/Machine.entity';
import { MachinesData } from './Entities/MachinesData.entity';
import * as dotenv from 'dotenv';

dotenv.config();
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Users, Machine, MachinesData],
  synchronize: true,
  dropSchema: false,
  timezone: 'Z',
  migrations: ['src/migrations/*.ts'],
});
