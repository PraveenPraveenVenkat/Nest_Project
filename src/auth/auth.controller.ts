// src/auth/auth.controller.ts
import { Body, Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Login } from './entity/login.entity';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('all')
  async getAllLogins(@Body()_body:LoginDto) {
    return this.authService.findAll();
  }
//   @Post('add')
//   async addLogin(@Body():)
 }

// import { Controller,Get } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { Login } from './entity/login.entity';

// @Controller('auth')
// export class AuthController {
//     constructor(private readonly authService: AuthService) {}
//     @Get()
//     async getAllLogin():Promise<Login[]>{
//         return this.authService.findAll();
//     }

// }
