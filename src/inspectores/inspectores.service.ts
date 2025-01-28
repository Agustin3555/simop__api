import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'
import { Prisma } from '@prisma/client'
import { DeleteManyDto } from '@/common/dto'

@Injectable()
export class InspectoresService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    const inspectores = await prisma.inspector.findMany({
      select: {
        ...omitFields(Prisma.InspectorScalarFieldEnum),
        profesiones: {
          select: {
            tipoProfesion: {
              select: { id: true, nombre: true },
            },
          },
        },
      },
    })

    return inspectores.map(({ profesiones, ...rest }) => ({
      profesiones: profesiones.map(({ tipoProfesion }: any) => tipoProfesion),
      ...rest,
    }))
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.inspector.findMany({
      select: { id: true, apellido: true },
    })
  }

  async create({ profesiones, ...rest }: CreateDto) {
    const { prisma } = this

    return await prisma.inspector.create({
      data: {
        profesiones: {
          createMany: {
            data: profesiones.map(id => ({ tipoProfesionId: id })),
          },
        },
        ...rest,
      },
    })
  }

  async deleteMany(deleteManyDto: DeleteManyDto) {
    const { prisma } = this

    return await prisma.$transaction([
      prisma.inspector.deleteMany({
        where: {
          id: { in: deleteManyDto.ids },
        },
      }),
    ])
  }
}
