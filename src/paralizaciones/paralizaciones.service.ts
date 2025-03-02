import { tipoSelectRef } from '@/common/dto'
import { omitFields } from '@/common/helpers'
import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { paralizacionSelectRef } from './dto/ref.dto'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'
import { obraSelectRef } from '@/obras/dto/ref.dto'

@Injectable()
export class ParalizacionesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.paralizacion.findMany({
      select: {
        ...omitFields(
          Prisma.ParalizacionScalarFieldEnum,
          'tipoParalizacionId',
          'obraId',
        ),
        tipoParalizacion: {
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

    return await prisma.paralizacion.findMany(paralizacionSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.paralizacion.create({
      data: createDto,
    })
  }
  async deleteMany(deleteManyDto: DeleteManyDto) {
    const { prisma } = this

    return await prisma.$transaction([
      prisma.paralizacion.deleteMany({
        where: {
          id: { in: deleteManyDto.ids },
        },
      }),
    ])
  }
}
