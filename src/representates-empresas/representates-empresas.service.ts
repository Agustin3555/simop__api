import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { PrismaService } from '@/prisma.service'

@Injectable()
export class RepresentatesEmpresasService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.representante.findMany()
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.representante.findMany({
      select: { id: true, nombre: true },
    })
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.representante.create({
      data: createDto,
    })
  }
}
