import { tipoSelectRef } from '@/common/dto'
import { omitFields } from '@/common/helpers'
import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { paralizacionSelectRef } from './dto/ref.dto'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'
import { obraSelectRef } from '@/obras/dto/ref.dto'
import { UpdateDto } from './dto/update.dto'
import { direccionSelectRef } from '@/direcciones/dto/ref.dto'
import { departamentoSelectRef } from '@/departamentos/dto/ref.dto'

@Injectable()
export class ParalizacionesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(filters?: { obraId?: number }) {
    const { prisma } = this
    const { obraId } = filters ?? {}

    return await prisma.paralizacion.findMany({
      where: { obraId },
      select: {
        ...omitFields(
          Prisma.ParalizacionScalarFieldEnum,
          'tipoParalizacionId',
          'obraId',
          'direccionId',
          'departamentoId',
        ),
        tipoParalizacion: {
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

    return await prisma.paralizacion.findUnique({
      where: { id },
      select: {
        ...omitFields(
          Prisma.ParalizacionScalarFieldEnum,
          'tipoParalizacionId',
          'obraId',
          'direccionId',
          'departamentoId',
        ),
        tipoParalizacion: {
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

    return await prisma.paralizacion.findMany(paralizacionSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.paralizacion.create({
      data: createDto,
    })
  }

  async updateOne(id: number, data: UpdateDto) {
    const { prisma } = this

    return await prisma.paralizacion.update({ where: { id }, data })
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
