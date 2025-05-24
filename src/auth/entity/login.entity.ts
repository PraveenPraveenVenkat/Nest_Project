
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('login')
export class Login {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;
}
