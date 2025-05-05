import { tipoSelectRef } from '@/common/dto'
import { omitFields } from '@/common/helpers'
import { obraSelectRef } from '@/obras/dto/ref.dto'
import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { rescisionSelectRef } from './dto/ref.dto'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'
import { direccionSelectRef } from '@/direcciones/dto/ref.dto'
import { departamentoSelectRef } from '@/departamentos/dto/ref.dto'

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
          'direccionId',
          'departamentoId',
        ),
        tipoRescision: {
          ...tipoSelectRef,
        },
        obra: {
          ...obraSelectRef,
        },
        direccion: {
          ...direccionSelectRef,
        },
        departamento: {
          ...departamentoSelectRef,
        },
      },
    })
  }

  async getOne(id: number) {
    const { prisma } = this

    return await prisma.rescision.findUnique({
      where: { id },
      select: {
        ...omitFields(
          Prisma.RescisionScalarFieldEnum,
          'tipoRescisionId',
          'obraId',
          'direccionId',
          'departamentoId',
        ),
        tipoRescision: {
          ...tipoSelectRef,
        },
        obra: {
          ...obraSelectRef,
        },
        direccion: {
          ...direccionSelectRef,
        },
        departamento: {
          ...departamentoSelectRef,
        },
      },
    })
  }

  async getRefs() {
    const { prisma } = this

    return await prisma.rescision.findMany(rescisionSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.rescision.create({
      data: createDto,
    })
  }

  async updateOne(id: number, data: UpdateDto) {
    const { prisma } = this

    return await prisma.rescision.update({ where: { id }, data })
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
