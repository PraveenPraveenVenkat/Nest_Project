// src/auth/entity/login.entity.ts
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

// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// @Entity('login')
// export class Login {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   email: string;

//   @Column()
//   password: string;
// }
