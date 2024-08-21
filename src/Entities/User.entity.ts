import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'varchar', length: 10, unique: true })
  emp_id: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'timestamp', default: null })
  last_login: Date;

  @Column({ type: 'timestamp', default: null })
  last_pass_update: Date;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
