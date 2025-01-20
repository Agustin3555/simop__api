import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'
import { Prisma } from '@prisma/client'

@Injectable()
export class RepresentantesObrasService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.representanteObra.findMany({
      select: {
        ...omitFields(
          Prisma.RepresentanteObraScalarFieldEnum,
          'obraId',
          'representanteId',
          'tipoRepresentanteId',
        ),
        obra: {
          select: { id: true, numero: true },
        },
        representante: {
          select: { id: true, apellido: true },
        },
        tipoRepresentante: {
          select: { id: true, nombre: true },
        },
      },
    })
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.representanteObra.create({
      data: createDto,
    })
  }
}
