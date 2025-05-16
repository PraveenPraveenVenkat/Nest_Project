// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class EmployeeService {
//     async 
// }


import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin, Repository } from 'typeorm';
import { admin } from './entity/employee.entity'; // adjust the path if needed
import { CreateEmployeeDto } from './dto/create-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Admin)
    private employeeRepository: Repository<Admin>,
  ) {}

  async getAllEmployees(): Promise<Admin[]> {
    return this.employeeRepository.find();
  }

  async createEmployee(dto: CreateEmployeeDto): Promise<Admin> {
    const employee = this.employeeRepository.create(dto);
    return this.employeeRepository.save(employee);
  }
}
