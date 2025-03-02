import { omitFields } from '@/common/helpers'
import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'
import { tipoSelectRef } from '@/common/dto'
import { redeterminacionesSelectRef } from './dto/ref.dto'
import { obraSelectRef } from '@/obras/dto/ref.dto'

@Injectable()
export class RedeterminacionesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.redeterminacion.findMany({
      select: {
        ...omitFields(
          Prisma.RedeterminacionScalarFieldEnum,
          'obraId',
          'tipoRedeterminacionId',
        ),
        obra: {
          ...obraSelectRef,
        },
        tipoRedeterminacion: {
          ...tipoSelectRef,
        },
      },
    })
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.redeterminacion.findMany(redeterminacionesSelectRef)
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
