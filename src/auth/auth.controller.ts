import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto.name, loginDto.password);
  }

  @Post('register')
  async register(@Body() loginDto: LoginDto) {
    return this.authService.register(loginDto.name, loginDto.password);
  }

  // ✅ Add this route to fix "Cannot GET /auth/all"
  @Get('all')
  async getAllUsers() {
    return this.authService.findAll();
  }
}


// // src/auth/auth.controller.ts
// import { Body, Controller, Get,Post,Put,Param } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { Login } from './entity/login.entity';
// import { LoginDto } from './dto/login.dto';
// import { CreateLoginDto } from './dto/create-login.dto';


// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}
//     //?  Get All
//   @Get('all')
//   async getAllLogins() {
//     const auth =await this.authService.findAll();
//     return{
//       Stautscode:200,
//       data:auth,
//     };
//   }

//     //?  Post All
// @Post('add')
// async addLogin(@Body() loginData: CreateLoginDto) {
//   const added = await this.authService.create(loginData);
//   return {
//     statusCode: 200,
//     message: 'Login created successfully',
//     data: added,
//   };
// }
// @Put('edit/:id')
// async editAuth(
//   @Param('id') id: string,
//   @Body() loginDto: CreateLoginDto
// ) {
//   const edit = await this.authService.updateLogin(id, loginDto);
//   return {
//     statusCode: 200,
//     message: 'Edited Successfully',
//     data: edit,
//   };
// }
// }

// @Put('edit/:id')
// async editAuth(@Param()authService:CreateLoginDto){
//   const edit =await this.authService.All(loginDto);
//   return{
//     statusCode:200,
//     message:'Edited Successfully',
//     data:edit,

//   }
// }




  // @Post('add')
  // async addLogin(@Body() loginData: CreateLoginDto){
  //   const add = await this.addLogin.create(loginData);
  //   return{
  //     statuscode:200,
  //     data:add,
  //   };
  // }



