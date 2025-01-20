import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'
import { Prisma } from '@prisma/client'

@Injectable()
export class FojasMedicionesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.fojaMedicion.findMany({
      select: {
        ...omitFields(
          Prisma.FojaMedicionScalarFieldEnum,
          'obraId',
          'inspectorId',
        ),
        obra: {
          select: { id: true, numero: true },
        },
        inspector: {
          select: { id: true, apellido: true },
        },
      },
    })
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.fojaMedicion.findMany({
      select: { id: true, numeroExpediente: true },
    })
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.fojaMedicion.create({
      data: createDto,
    })
  }
}
