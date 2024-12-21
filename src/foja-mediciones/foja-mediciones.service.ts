import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'
import { Prisma } from '@prisma/client'

@Injectable()
export class FojaMedicionesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.fojaMedicion.findMany({
      select: {
        ...omitFields(
          Prisma.FojaMedicionScalarFieldEnum,
          'inspectorId',
          'obraNumero',
        ),
        inspector: {
          select: { id: true, nombre: true },
        },
        obra: {
          select: { numero: true, nombre: true },
        },
      },
    })
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.fojaMedicion.findMany({
      select: { id: true, obraNumero: true, inspectorId: true },
    })
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.fojaMedicion.create({
      data: createDto,
    })
  }
}
