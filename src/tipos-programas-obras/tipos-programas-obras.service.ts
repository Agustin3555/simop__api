import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { PrismaService } from '@/prisma.service'
import { tipoSelectRef } from '@/common/dto/tipoSelectRef.dto'
@Injectable()
export class TiposProgramasObrasService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.tipoProgramaObra.findMany()
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.tipoProgramaObra.findMany(tipoSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.tipoProgramaObra.create({
      data: createDto,
    })
  }
}
