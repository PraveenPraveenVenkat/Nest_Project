// import { Controller,Get } from '@nestjs/common';

// @Controller('employee')
// export class EmployeeController {
//     constructor (private readonly EmployeeDto:EmployeeDto ){

//  @Get ('all')
//     getEmployee (): string {
//         return 'This is From Get in Employee'
//     }
//     }
//     @Get('all')
//     getAllEmployee() Promis<admin>
//      const find= 
//         return 'this is From employee'
//     }

// }

import { Controller, Get } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { admin } from './entity/employee.entity';
import { Admin } from 'typeorm';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get('all')
  async getAllEmployee(): Promise<Admin[]> {
    // return this.employeeService.getAllEmployees();
    return 'this is From Get Method'
  }
}


