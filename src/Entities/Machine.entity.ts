import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { MachineType } from './Enum/MachineType';

@Entity('machines')
export class Machine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  machine_name: string;

  @Column({ type: 'enum', enum: MachineType })
  machine_type: MachineType;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
