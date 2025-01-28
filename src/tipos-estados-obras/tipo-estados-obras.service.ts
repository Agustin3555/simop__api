import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { CreateDto } from './dto/create.dto'
import { tipoSelectRef } from '@/common/dto/tipoSelectRef.dto'

@Injectable()
export class TipoEstadosObrasService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.tipoEstadoObra.findMany()
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.tipoEstadoObra.findMany(tipoSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.tipoEstadoObra.create({
      data: createDto,
    })
  }
}
