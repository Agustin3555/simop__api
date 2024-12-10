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

    return await prisma.obra.findMany({
      select: {
        ...omitFields(
          Prisma.ObraScalarFieldEnum,
          'paisId',
          'provinciaId',
          'tipoEstadoId',
          'tipoFinanciamientoId',
          'tipoTematicaId',
          'empresaId',
          'localidadId',
        ),
        localidad: {
          select: {
            id: true,
            nombre: true,
          },
        },
        empresa: {
          select: {
            id: true,
            nombre: true,
          },
        },
        tipoFinanciamiento: {
          select: {
            id: true,
            nombre: true,
          },
        },
        tipoTematica: {
          select: {
            id: true,
            nombre: true,
          },
        },
        tipoEstado: {
          select: {
            id: true,
            nombre: true,
          },
        },
        pais: {
          select: {
            id: true,
            nombre: true,
          },
        },
        provincia: {
          select: {
            id: true,
            nombre: true,
          },
        },
      },
    })
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.obra.findMany({
      select: {
        id: true,
        nombre: true,
        empresaId: true,
        localidadId: true,
        tipoFinanciamientoId: true,
        tipoTematicaId: true,
        tipoEstadoId: true,
        paisId: true,
        provinciaId: true,
      },
    })
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.obra.create({
      data: createDto,
    })
  }
}
