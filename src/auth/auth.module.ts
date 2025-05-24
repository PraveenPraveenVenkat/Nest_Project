// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Login } from './entity/login.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Login]), // ✅ Register repository
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}


// import { Module } from '@nestjs/common';
// import { AuthController } from './auth.controller';
// import { AuthService } from './auth.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Login } from './entity/login.entity';

// @Module({
//    imports: [TypeOrmModule.forFeature([Login])], 
//   controllers: [AuthController],
//   providers: [AuthService]
// })
// export class AuthModule {}
