import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'
import { Prisma } from '@prisma/client'
import { DeleteManyDto } from '@/common/dto'
import { fojaMedicionSelectRef } from './dto/ref.dto'
import { obraSelectRef } from '@/obras/dto/ref.dto'
import { inspectorSelectRef } from '@/inspectores/dto/ref.dto'

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
          ...obraSelectRef,
        },
        inspector: {
          ...inspectorSelectRef,
        },
      },
    })
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.fojaMedicion.findMany(fojaMedicionSelectRef)
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
