import { tipoSelectRef } from '@/common/dto/tipoSelectRef.dto'
import { omitFields } from '@/common/helpers'
import { obraSelectRef } from '@/obras/dto/ref.dto'
import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Injectable()
export class ModificacionesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.modificacion.findMany({
      select: {
        ...omitFields(
          Prisma.ModificacionScalarFieldEnum,
          'obraId',
          'tipoModificacionId',
        ),
        obra: {
          ...obraSelectRef,
        },
        tipoModificacion: {
          ...tipoSelectRef,
        },
      },
    })
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.modificacion.findMany()
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.modificacion.create({
      data: createDto,
    })
  }
  async deleteMany(deleteManyDto: DeleteManyDto) {
    const { prisma } = this

    return await prisma.$transaction([
      prisma.modificacion.deleteMany({
        where: {
          id: { in: deleteManyDto.ids },
        },
      }),
    ])
  }
}
