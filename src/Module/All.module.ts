import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataController } from './Data/Data.contoller';
import { DataService } from './Data/Data.service';
import { MachinesData } from 'src/Entities/MachinesData.entity';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forFeature([MachinesData])],
  controllers: [DataController],
  providers: [DataService],
  exports: [DataService],
})
export class AllModule {}
