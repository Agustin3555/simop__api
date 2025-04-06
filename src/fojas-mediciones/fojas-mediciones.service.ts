import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'
import { Prisma } from '@prisma/client'
import { DeleteManyDto } from '@/common/dto'
import { fojaMedicionSelectRef } from './dto/ref.dto'
import { obraSelectRef } from '@/obras/dto/ref.dto'
import { inspectorSelectRef } from '@/inspectores/dto/ref.dto'
import { UpdateDto } from './dto/update.dto'
import { direccionSelectRef } from '@/direcciones/dto/ref.dto'
import { departamentoSelectRef } from '@/departamentos/dto/ref.dto'

@Injectable()
export class FojasMedicionesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    const fojasMedicion = await prisma.fojaMedicion.findMany({
      select: {
        ...omitFields(
          Prisma.FojaMedicionScalarFieldEnum,
          'obraId',
          'inspectorId',
          'direccionId',
          'departamentoId',
        ),
        obra: {
          ...obraSelectRef,
        },
        inspector: {
          ...inspectorSelectRef,
        },
        direccion: {
          ...direccionSelectRef,
        },
        departamento: {
          ...departamentoSelectRef,
        },
      },
    })

    return fojasMedicion.map(({ montoTotal, ...rest }) => ({
      montoTotal: montoTotal && String(montoTotal),
      ...rest,
    }))
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.fojaMedicion.findMany(fojaMedicionSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.fojaMedicion.create({
      data: createDto,
    })
  }
  async updateOne(id: number, data: UpdateDto) {
    const { prisma } = this

    return await prisma.fojaMedicion.update({ where: { id }, data })
  }

  async deleteMany(deleteManyDto: DeleteManyDto) {
    const { prisma } = this

    return await prisma.$transaction([
      prisma.fojaMedicion.deleteMany({
        where: {
          id: { in: deleteManyDto.ids },
        },
      }),
    ])
  }
}
