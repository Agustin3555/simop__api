import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { CreateDto } from './dto/create.dto'

@Injectable()
export class TipoModificacionesObrasService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.tipoModificacionObra.findMany()
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.tipoModificacionObra.findMany({
      select: { id: true, nombre: true },
    })
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.tipoModificacionObra.create({
      data: createDto,
    })
  }
}
