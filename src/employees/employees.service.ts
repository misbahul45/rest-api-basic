import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly prisma:DatabaseService) {}
  create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    return this.prisma.employee.create({
      data:createEmployeeDto
    })
  }

  findAll(role?:'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.prisma.employee.findMany({
      where:{
        role
      }
    })
  }

  findOne(id: number) {
    return this.prisma.employee.findUnique({
      where:{
        id
      }
    })
  }

  update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.prisma.employee.update({
      where:{
        id
      },
      data:{
        ...updateEmployeeDto
      }
    })
  }

  remove(id: number) {
    return this.prisma.employee.delete({
      where:{
        id
      }
    })
  }
}
