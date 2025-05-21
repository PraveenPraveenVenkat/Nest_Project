// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Login } from './entity/login.entity';
import { CreateLoginDto } from './dto/create-login.dto';


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Login)
    private readonly loginRepository: Repository<Login>,
  ) {}

     async findAll(): Promise<Login[]> {
    return this.loginRepository.find();
  }
  // async create(): Promise<Login[]> {
  //   return this.loginRepository.create();
  // }
async create(loginData:  CreateLoginDto): Promise<Login> {
  const newLogin = this.loginRepository.create(loginData);
  return await this.loginRepository.save(newLogin);
}
}
