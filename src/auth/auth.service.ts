// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Login } from './entity/login.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Login)
    private readonly loginRepository: Repository<Login>,
  ) {}

//   async findAll(): Promise<Login[]> { 
//   const allLogins = await this.loginRepository.find();
//   console.log(allLogins);  // Check what's returned here
//   return allLogins;
// }

  async findAll(): Promise<Login[]> {
    return this.loginRepository.find();
  }

}

// import { Injectable } from '@nestjs/common';
// import { Repository } from 'typeorm';
// import { Login } from './entity/login.entity';
// import { InjectRepository } from '@nestjs/typeorm';

// @Injectable()
// export class AuthService {
//     constructor(
//          @InjectRepository(Login)
//     private readonly loginRepository: Repository<Login>,
//     ){
//    async findAll():Promise<Login[]>{
//     return this.loginRepository.find();
//    }
    
// }  
// }
