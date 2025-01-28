import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { CreateDto } from './dto/create.dto'
import { tipoSelectRef } from '@/common/dto/tipoSelectRef.dto'

@Injectable()
export class TipoParalizacionesObrasService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.tipoParalizacion.findMany()
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.tipoParalizacion.findMany(tipoSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.tipoParalizacion.create({
      data: createDto,
    })
  }
}
