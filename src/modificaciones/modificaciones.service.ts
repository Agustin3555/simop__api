import { tipoSelectRef } from '@/common/dto'
import { omitFields } from '@/common/helpers'
import { obraSelectRef } from '@/obras/dto/ref.dto'
import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'
import { modificacionesSelectRef } from './dto/ref.dto'
import { UpdateDto } from './dto/update.dto'
import { direccionSelectRef } from '@/direcciones/dto/ref.dto'
import { departamentoSelectRef } from '@/departamentos/dto/ref.dto'

@Injectable()
export class ModificacionesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    const modificaciones = await prisma.modificacion.findMany({
      select: {
        ...omitFields(
          Prisma.ModificacionScalarFieldEnum,
          'obraId',
          'tipoModificacionId',
          'direccionId',
          'departamentoId',
        ),
        obra: {
          ...obraSelectRef,
        },
        tipoModificacion: {
          ...tipoSelectRef,
        },
        direccion: {
          ...direccionSelectRef,
        },
        departamento: {
          ...departamentoSelectRef,
        },
      },
    })

    return modificaciones.map(({ monto, nuevoMontoObra, ...rest }) => ({
      monto: monto && String(monto),
      nuevoMontoObra: nuevoMontoObra && String(nuevoMontoObra),
      ...rest,
    }))
  }

  async getOne(id: number) {
    const { prisma } = this

    return await prisma.modificacion.findUnique({
      where: { id },
      select: {
        ...omitFields(
          Prisma.ModificacionScalarFieldEnum,
          'obraId',
          'tipoModificacionId',
          'direccionId',
          'departamentoId',
        ),
        obra: {
          ...obraSelectRef,
        },
        tipoModificacion: {
          ...tipoSelectRef,
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

  async getForConnect() {
    const { prisma } = this

    return await prisma.modificacion.findMany(modificacionesSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.modificacion.create({
      data: createDto,
    })
  }

  async updateOne(id: number, data: UpdateDto) {
    const { prisma } = this

    return await prisma.modificacion.update({ where: { id }, data })
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
