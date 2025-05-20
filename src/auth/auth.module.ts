import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Login } from './entity/login.entity';

@Module({
   imports: [TypeOrmModule.forFeature([Login])], 
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
