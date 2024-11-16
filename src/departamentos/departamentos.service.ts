import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { CreateDto } from './dto/create.dto'

@Injectable()
export class DepartamentosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.departamento.create({
      data: createDto,
    })
  }

  async getAll() {
    const { prisma } = this

    return await prisma.departamento.findMany()
  }
}
