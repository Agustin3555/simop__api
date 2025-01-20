import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'
import { Prisma } from '@prisma/client'

@Injectable()
export class RepresentantesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.representante.findMany()
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.representante.findMany({
      select: {
        ...omitFields(
          Prisma.RepresentanteScalarFieldEnum,
          'paisId',
          'provinciaId',
          'localidadId',
        ),
        pais: {
          select: { id: true, nombre: true },
        },
        provincia: {
          select: { id: true, nombre: true },
        },
        localidad: {
          select: { id: true, nombre: true },
        },
      },
    })
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.representante.create({
      data: createDto,
    })
  }
}
