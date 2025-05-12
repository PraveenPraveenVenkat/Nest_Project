import { Controller,Get } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
    @Get ('all')
    getEmployee (): string {
        return 'This is From Get in Employee'
    }

}
