import { omitFields } from '@/common/helpers'
import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'
import { certificacionSelectRef } from '@/certificaciones/dto/ref.dto'
import { tipoSelectRef } from '@/common/dto/tipoSelectRef.dto'

@Injectable()
export class RedeterminacionesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.redeterminacion.findMany({
      select: {
        ...omitFields(
          Prisma.RedeterminacionScalarFieldEnum,
          'certificacionId',
          'tipoRedeterminacionId',
        ),
        certificacion: {
          ...certificacionSelectRef,
        },
        tipoRedeterminacion: {
          ...tipoSelectRef,
        },
      },
    })
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.redeterminacion.findMany()
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.redeterminacion.create({
      data: createDto,
    })
  }
  async deleteMany(deleteManyDto: DeleteManyDto) {
    const { prisma } = this

    return await prisma.$transaction([
      prisma.redeterminacion.deleteMany({
        where: {
          id: { in: deleteManyDto.ids },
        },
      }),
    ])
  }
}
