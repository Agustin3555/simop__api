import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'
import { Prisma } from '@prisma/client'

@Injectable()
export class RelObrasRepresentantesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.relObraRepresentante.findMany({
      select: {
        ...omitFields(
          Prisma.RelObraRepresentanteScalarFieldEnum,
          'obraId',
          'representanteId',
        ),
        obra: true,
        representante: true,
      },
    })
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.relObraRepresentante.findMany({
      select: { obraId: true, representanteId: true },
    })
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.relObraRepresentante.create({
      data: createDto,
    })
  }
}
