import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'
import { Prisma } from '@prisma/client'
import { DeleteManyDto } from '@/common/dto'
import { obraSelectRef } from '@/obras/dto/ref.dto'
import { inspectorSelectRef } from '@/inspectores/dto/ref.dto'
import { tipoSelectRef } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

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
          ...obraSelectRef,
        },
        inspector: {
          ...inspectorSelectRef,
        },
        tipoInspector: {
          ...tipoSelectRef,
        },
        tipoProfesion: {
          ...tipoSelectRef,
        },
      },
    })
  }

  async getOne(id: number) {
    const { prisma } = this

    return await prisma.inspectorObra.findUnique({
      where: { id },
      select: {
        ...omitFields(
          Prisma.InspectorObraScalarFieldEnum,
          'obraId',
          'inspectorId',
          'tipoInspectorId',
          'tipoProfesionId',
        ),
        obra: {
          ...obraSelectRef,
        },
        inspector: {
          ...inspectorSelectRef,
        },
        tipoInspector: {
          ...tipoSelectRef,
        },
        tipoProfesion: {
          ...tipoSelectRef,
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

  async updateOne(id: number, data: UpdateDto) {
    const { prisma } = this

    return await prisma.inspectorObra.update({ where: { id }, data })
  }

  async deleteMany(deleteManyDto: DeleteManyDto) {
    const { prisma } = this

    return await prisma.$transaction([
      prisma.inspectorObra.deleteMany({
        where: {
          id: { in: deleteManyDto.ids },
        },
      }),
    ])
  }
}
