import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'
import { Prisma } from '@prisma/client'

@Injectable()
export class RelObrasInspectoresService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.relObraInspector.findMany({
      select: {
        ...omitFields(
          Prisma.RelObraInspectorScalarFieldEnum,
          'obraId',
          'inspectorId',
          'tipoInspectorId',
        ),
        obra: true,
        inspector: true,
        tipoInspector: true,
      },
    })
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.relObraInspector.findMany({
      select: {
        obraId: true,
        inspectorId: true,
        tipoInspectorId: true,
      },
    })
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.relObraInspector.create({
      data: createDto,
    })
  }
}
