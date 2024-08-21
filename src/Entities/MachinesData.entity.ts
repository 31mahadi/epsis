import { ManyToOne } from 'typeorm';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { Machine } from './Machine.entity';
import { Users } from './User.entity';
import { QA_Response } from './Enum/QA_Resoinse';

@Entity('machine_data')
export class MachinesData {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Machine)
  machine: Machine;

  @ManyToOne(() => Users)
  user: Users;

  @Column({ type: 'timestamp' })
  date: Date;

  @Column({ type: 'enum', enum: QA_Response })
  q1: QA_Response;
  @Column({ type: 'enum', enum: QA_Response })
  q2: QA_Response;
  @Column({ type: 'enum', enum: QA_Response })
  q3: QA_Response;
  @Column({ type: 'enum', enum: QA_Response })
  q4: QA_Response;
  @Column({ type: 'enum', enum: QA_Response })
  q5: QA_Response;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
