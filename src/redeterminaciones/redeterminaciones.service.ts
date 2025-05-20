import { omitFields } from '@/common/helpers'
import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'
import { tipoSelectRef } from '@/common/dto'
import { redeterminacionesSelectRef } from './dto/ref.dto'
import { obraSelectRef } from '@/obras/dto/ref.dto'
import { UpdateDto } from './dto/update.dto'
import { direccionSelectRef } from '@/direcciones/dto/ref.dto'
import { departamentoSelectRef } from '@/departamentos/dto/ref.dto'

@Injectable()
export class RedeterminacionesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(filters?: { obraId?: number }) {
    const { prisma } = this
    const { obraId } = filters ?? {}

    const redeterminaciones = await prisma.redeterminacion.findMany({
      where: { obraId },
      select: {
        ...omitFields(
          Prisma.RedeterminacionScalarFieldEnum,
          'obraId',
          'tipoRedeterminacionId',
          'direccionId',
          'departamentoId',
          'redeterminacionId',
        ),
        obra: {
          ...obraSelectRef,
        },
        tipoRedeterminacion: {
          ...tipoSelectRef,
        },
        direccion: {
          ...direccionSelectRef,
        },
        departamento: {
          ...departamentoSelectRef,
        },
        redeterminacionesHijas: {
          ...redeterminacionesSelectRef,
        },
      },
    })

    return redeterminaciones.map(({ montoTotal, nuevoMontoObra, ...rest }) => ({
      montoTotal: montoTotal && String(montoTotal),
      nuevoMontoObra: nuevoMontoObra && String(nuevoMontoObra),
      ...rest,
    }))
  }

  async getOne(id: number) {
    const { prisma } = this

    return await prisma.redeterminacion.findUnique({
      where: { id },
      select: {
        ...omitFields(
          Prisma.RedeterminacionScalarFieldEnum,
          'obraId',
          'tipoRedeterminacionId',
          'direccionId',
          'departamentoId',
          'redeterminacionId',
        ),
        obra: {
          ...obraSelectRef,
        },
        tipoRedeterminacion: {
          ...tipoSelectRef,
        },
        direccion: {
          ...direccionSelectRef,
        },
        departamento: {
          ...departamentoSelectRef,
        },
        redeterminacionesHijas: {
          ...redeterminacionesSelectRef,
        },
      },
    })
  }

  async getRefs() {
    const { prisma } = this

    return await prisma.redeterminacion.findMany(redeterminacionesSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.redeterminacion.create({
      data: createDto,
    })
  }

  async updateOne(id: number, data: UpdateDto) {
    const { prisma } = this

    return await prisma.redeterminacion.update({ where: { id }, data })
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
