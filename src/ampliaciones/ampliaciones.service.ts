import { omitFields } from '@/common/helpers'
import { obraSelectRef } from '@/obras/dto/ref.dto'
import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'
import { ampliacionesSelectRef } from './dto/ref.dto'
import { UpdateDto } from './dto/update.dto'
import { direccionSelectRef } from '@/direcciones/dto/ref.dto'
import { departamentoSelectRef } from '@/departamentos/dto/ref.dto'

@Injectable()
export class AmpliacionesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(filters?: { obraId?: number }) {
    const { prisma } = this
    const { obraId } = filters ?? {}

    return await prisma.ampliacion.findMany({
      where: { obraId },
      select: {
        ...omitFields(
          Prisma.AmpliacionScalarFieldEnum,
          'obraId',
          'direccionId',
          'departamentoId',
        ),
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

    return await prisma.ampliacion.findMany(ampliacionesSelectRef)
  }

  async getOne(id: number) {
    const { prisma } = this

    return await prisma.ampliacion.findUnique({
      where: { id },
      select: {
        ...omitFields(
          Prisma.AmpliacionScalarFieldEnum,
          'obraId',
          'direccionId',
          'departamentoId',
        ),
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

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.ampliacion.create({
      data: createDto,
    })
  }

  async updateOne(id: number, data: UpdateDto) {
    const { prisma } = this

    return await prisma.ampliacion.update({ where: { id }, data })
  }

  async deleteMany(deleteManyDto: DeleteManyDto) {
    const { prisma } = this

    return await prisma.$transaction([
      prisma.ampliacion.deleteMany({
        where: {
          id: { in: deleteManyDto.ids },
        },
      }),
    ])
  }
}
