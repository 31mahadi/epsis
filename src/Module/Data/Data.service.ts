import { CollectDTO } from './DTO/Collect.dto';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubmitDTO } from './DTO/Submit.dto';
import { REQUEST } from '@nestjs/core';
import { MachinesData } from '../../Entities/MachinesData.entity';

@Injectable()
export class DataService {
  constructor(
    @Inject(REQUEST) private readonly request: Request,
    @InjectRepository(MachinesData)
    private MD_REPO: Repository<MachinesData>,
  ) {}

  async submit(SubmitDTO: SubmitDTO): Promise<any> {
    try {
      const submittedData = await this.MD_REPO.save(SubmitDTO);
      return submittedData;
    } catch (error) {
      throw error;
    }
  }

  async collect(CollectDTO: CollectDTO) {
    const { machine_type, from, to, emp_id } = CollectDTO;
    const queryBuilder = this.MD_REPO.createQueryBuilder('machine_data')
      .leftJoinAndSelect('machine_data.machine', 'machine')
      .leftJoinAndSelect('machine_data.user', 'user')
      .select([
        'machine_data.date',
        'machine_data.q1',
        'machine_data.q2',
        'machine_data.q3',
        'machine_data.q4',
        'machine_data.q5',
        'machine.machine_name',
        'machine.machine_type',
        'user.name',
        'user.emp_id',
      ]);

    if (machine_type) {
      queryBuilder.andWhere('machine.machine_type = :machine_type', {
        machine_type,
      });
    }

    if (emp_id) {
      queryBuilder.andWhere('user.emp_id = :emp_id', { emp_id });
    }

    if (from && to) {
      queryBuilder.andWhere('machine_data.date BETWEEN :from AND :to', {
        from: new Date(from),
        to: new Date(to),
      });
    }

    return queryBuilder.getMany();
  }
}
