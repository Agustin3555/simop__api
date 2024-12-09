import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { PrismaService } from '@/prisma.service'

@Injectable()
export class EmpresasService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.empresa.findMany()
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.empresa.findMany({
      select: { id: true, nombre: true },
    })
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.empresa.create({
      data: createDto,
    })
  }
}
