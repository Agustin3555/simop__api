import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'
import { Prisma } from '@prisma/client'
import { DeleteManyDto } from '@/common/dto'

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
  async deleteMany(deleteManyDto: DeleteManyDto) {
      const { prisma } = this
  
      return await prisma.$transaction([
        prisma.fojaMedicion.deleteMany({
          where: {
            id: { in: deleteManyDto.ids },
          },
        }),
      ])
    }
}
