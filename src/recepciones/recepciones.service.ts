import { tipoSelectRef } from '@/common/dto'
import { omitFields } from '@/common/helpers'
import { obraSelectRef } from '@/obras/dto/ref.dto'
import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { recepcionSelectRef } from './dto/ref.dto'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'
import { direccionSelectRef } from '@/direcciones/dto/ref.dto'
import { departamentoSelectRef } from '@/departamentos/dto/ref.dto'

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
          'direccionId',
          'departamentoId',
        ),
        tipoRecepcion: {
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

    return await prisma.recepcion.findUnique({
      where: { id },
      select: {
        ...omitFields(
          Prisma.RecepcionScalarFieldEnum,
          'tipoRecepcionId',
          'obraId',
          'direccionId',
          'departamentoId',
        ),
        tipoRecepcion: {
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

    return await prisma.recepcion.findMany(recepcionSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.recepcion.create({
      data: createDto,
    })
  }

  async updateOne(id: number, data: UpdateDto) {
    const { prisma } = this

    return await prisma.recepcion.update({ where: { id }, data })
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
