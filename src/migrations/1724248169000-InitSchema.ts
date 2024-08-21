import { MigrationInterface, QueryRunner } from 'typeorm';
import { MachineType } from 'src/Entities/Enum/MachineType';
import { QA_Response } from 'src/Entities/Enum/QA_Resoinse';
import * as moment from 'moment';

export class InitSchema1724248169000 implements MigrationInterface {
  name = 'InitSchema1724248169000';
  private randomEnum(obj: { [key: string]: string }): string {
    const values = Object.values(obj);
    return values[Math.floor(Math.random() * values.length)];
  }

  private random(count: number): number {
    return Math.floor(Math.random() * count) + 1;
  }

  private getRandomDate(): string {
    const now = moment();
    const startOfMonth = now.clone().startOf('month');
    const endOfMonth = now.clone().endOf('month');
    const randomDate = moment(startOfMonth).add(
      Math.random() * (endOfMonth.diff(startOfMonth, 'days') + 1),
      'days',
    );

    const dateFormat = 'YYYY-MM-DD HH:mm:ss';
    return randomDate.format(dateFormat);
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO machines (machine_name, machine_type) VALUES 
      ${Array(100)
        .fill(0)
        .map(
          (_, i) => `('Machine ${i + 1}', '${this.randomEnum(MachineType)}')`,
        )
        .join(',')};
    `);

    await queryRunner.query(`
      INSERT INTO users (name, emp_id, password) VALUES 
      ${Array(5)
        .fill(0)
        .map((_, i) => `('User ${i + 1}', 'EMP${i + 1}', 'password')`)
        .join(',')};
    `);

    const [machinesResult, usersResult] = await Promise.all([
      queryRunner.query('SELECT COUNT(id) as count FROM machines'),
      queryRunner.query('SELECT COUNT(id) as count FROM users'),
    ]);

    const machineCount = Number(machinesResult[0].count);
    const userCount = Number(usersResult[0].count);

    await queryRunner.query(`
      INSERT INTO machine_data (machineId, userId, date, q1, q2, q3, q4, q5) VALUES 
      ${Array(1000)
        .fill(0)
        .map(
          (_) => `(
          ${this.random(machineCount)},
          ${this.random(userCount)},
          '${this.getRandomDate()}',
          '${this.randomEnum(QA_Response)}',
          '${this.randomEnum(QA_Response)}',
          '${this.randomEnum(QA_Response)}',
          '${this.randomEnum(QA_Response)}',
          '${this.randomEnum(QA_Response)}'
        )`,
        )
        .join(',')};
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM machine_data');
    await queryRunner.query('DELETE FROM users');
    await queryRunner.query('DELETE FROM machines');
  }
}
