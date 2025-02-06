import { tipoSelectRef } from '@/common/dto/tipoSelectRef.dto'
import { omitFields } from '@/common/helpers'
import { obraSelectRef } from '@/obras/dto/ref.dto'
import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { recepcionSelectRef } from './dto/ref.dto'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Injectable()
export class RecepcionesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.recepcion.findMany({
      select: {
        ...omitFields(
          Prisma.RecepcionScalarFieldEnum,
          'tipoRecepcionId',
          'obraId',
        ),
        tipoRecepcion: {
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

    return await prisma.recepcion.findMany(recepcionSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.recepcion.create({
      data: createDto,
    })
  }
  async deleteMany(deleteManyDto: DeleteManyDto) {
    const { prisma } = this

    return await prisma.$transaction([
      prisma.recepcion.deleteMany({
        where: {
          id: { in: deleteManyDto.ids },
        },
      }),
    ])
  }
}
