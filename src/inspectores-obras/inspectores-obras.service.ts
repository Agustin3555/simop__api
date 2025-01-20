import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'
import { Prisma } from '@prisma/client'

@Injectable()
export class InspectoresObrasService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.inspectorObra.findMany({
      select: {
        ...omitFields(
          Prisma.InspectorObraScalarFieldEnum,
          'obraId',
          'inspectorId',
          'tipoInspectorId',
          'tipoProfesionId',
        ),
        obra: {
          select: { id: true, numero: true },
        },
        inspector: {
          select: { id: true, apellido: true },
        },
        tipoInspector: {
          select: { id: true, nombre: true },
        },
        tipoProfesion: {
          select: { id: true, nombre: true },
        },
      },
    })
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.inspectorObra.create({
      data: createDto,
    })
  }
}
