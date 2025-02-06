import { tipoSelectRef } from '@/common/dto/tipoSelectRef.dto'
import { omitFields } from '@/common/helpers'
import { obraSelectRef } from '@/obras/dto/ref.dto'
import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { rescisionSelectRef } from './dto/ref.dto'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Injectable()
export class RescisionesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.rescision.findMany({
      select: {
        ...omitFields(
          Prisma.RescisionScalarFieldEnum,
          'tipoRescisionId',
          'obraId',
        ),
        tipoRescision: {
          ...tipoSelectRef,
        },
        obra: {
          ...obraSelectRef,
        },
      },
    })
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.rescision.findMany(rescisionSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.rescision.create({
      data: createDto,
    })
  }
  async deleteMany(deleteManyDto: DeleteManyDto) {
    const { prisma } = this

    return await prisma.$transaction([
      prisma.rescision.deleteMany({
        where: {
          id: { in: deleteManyDto.ids },
        },
      }),
    ])
  }
}
