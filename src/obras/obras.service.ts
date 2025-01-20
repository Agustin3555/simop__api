import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'
import { Prisma } from '@prisma/client'

@Injectable()
export class ObrasService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    const a = await prisma.obra.findMany({
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
          select: { id: true, nombre: true },
        },
        tipoContratacionObra: {
          select: { id: true, nombre: true },
        },
        tipoFinanciamientoObra: {
          select: { id: true, nombre: true },
        },
        tipoProgramaObra: {
          select: { id: true, nombre: true },
        },
        tipoTematicaObra: {
          select: { id: true, nombre: true },
        },
        tipoEstadoObra: {
          select: { id: true, nombre: true },
        },
        localidad: {
          select: { id: true, nombre: true },
        },
      },
    })

    return a.map(({ numero, ...rest }) => ({ id: numero, numero, ...rest }))
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.obra.findMany({
      select: { numero: true, nombre: true },
    })
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.obra.create({
      data: createDto,
    })
  }
}
