import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'
import { Prisma } from '@prisma/client'
import { DeleteManyDto } from '@/common/dto'
import { empresaSelectRef } from '@/empresas/dto/ref.dto'
import { tipoSelectRef } from '@/common/dto/tipoSelectRef.dto'
import { localidadSelectRef } from '@/localidades/dto/ref.dto'
import { obraSelectRef } from './dto/ref.dto'

@Injectable()
export class ObrasService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    const obras = await prisma.obra.findMany({
      select: {
        ...omitFields(
          Prisma.ObraScalarFieldEnum,
          'empresaId',
          'tipoContratacionObraId',
          'tipoFinanciamientoObraId',
          'tipoProgramaObraId',
          'tipoTematicaObraId',
          'tipoEstadoObraId',
          'localidadId',
        ),
        empresa: {
          ...empresaSelectRef,
        },
        tipoContratacionObra: {
          ...tipoSelectRef,
        },
        tipoFinanciamientoObra: {
          ...tipoSelectRef,
        },
        tipoProgramaObra: {
          ...tipoSelectRef,
        },
        tipoTematicaObra: {
          ...tipoSelectRef,
        },
        tipoEstadoObra: {
          ...tipoSelectRef,
        },
        localidad: {
          ...localidadSelectRef,
        },
      },
    })

    return obras.map(({ montoContratacion, ...rest }) => ({
      montoContratacion: montoContratacion.toString(),
      ...rest,
    }))
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.obra.findMany(obraSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.obra.create({
      data: createDto,
    })
  }

  async deleteMany(deleteManyDto: DeleteManyDto) {
    const { prisma } = this

    return await prisma.$transaction([
      prisma.obra.deleteMany({
        where: {
          id: { in: deleteManyDto.ids },
        },
      }),
    ])
  }
}
