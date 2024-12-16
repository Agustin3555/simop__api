import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { CreateDto } from './dto/create.dto'

@Injectable()
export class TipoParalizacionesObrasService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.tipoParalizacion.findMany()
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.tipoParalizacion.findMany({
      select: { id: true, nombre: true },
    })
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.tipoParalizacion.create({
      data: createDto,
    })
  }
}
