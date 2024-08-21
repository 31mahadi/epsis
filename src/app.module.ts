import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AllModule } from './Module/All.module';
import { Users } from './Entities/User.entity';
import { Machine } from './Entities/Machine.entity';
import { MachinesData } from './Entities/MachinesData.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Users, Machine, MachinesData],
      synchronize: false,
      dropSchema: false,
      timezone: 'Z',
    }),
    AllModule,
  ],
})
export class AppModule {}
