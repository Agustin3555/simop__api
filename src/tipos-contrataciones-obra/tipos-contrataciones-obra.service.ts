import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { CreateDto } from './dto/create.dto'

@Injectable()
export class TiposContratacionesObraService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.tipoContratacionObra.findMany()
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.tipoContratacionObra.findMany({
      select: { id: true, nombre: true },
    })
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.tipoContratacionObra.create({
      data: createDto,
    })
  }
}
