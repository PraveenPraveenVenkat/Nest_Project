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
    //  ?Get Method
     async findAll(): Promise<Login[]> {
    return this.loginRepository.find();
  }
  // async create(): Promise<Login[]> {
  //   return this.loginRepository.create();
  // }
     //  ?Post Method
async create(loginData:  CreateLoginDto): Promise<Login> {
  const newLogin = this.loginRepository.create(loginData);
  return await this.loginRepository.save(newLogin);
}
  //  ?Put Method
  // async findAll(loginData) {
  //   const  edit = awit this.loginRepository.updateAll(loginData);
  //   return await this.loginRepository.create();
  // }
//   async updateLogin(id: string, loginData: CreateLoginDto) {
//   await this.loginRepository.update({ id }, loginData);
//   const updated = await this.loginRepository.findOne({ where: { id } });
//   return updated;
// }
async updateLogin(id: string, loginData: CreateLoginDto) {
  const numericId = parseInt(id, 10); // Convert string to number

  await this.loginRepository.update({ id: numericId }, loginData);

  const updated = await this.loginRepository.findOne({ where: { id: numericId } });
  return updated;
}


}
