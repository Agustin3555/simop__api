import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { omitFields } from '@/common/helpers'
import { Prisma } from '@prisma/client'
import { CreateDto } from './dto/create.dto'
import { UpdateDto } from './dto/update.dto'
import { DeleteManyDto, tipoSelectRef } from '@/common/dto'
import { inspectorSelectRef } from './dto/ref.dto'

@Injectable()
export class InspectoresService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    const inspectores = await prisma.inspector.findMany({
      select: {
        ...omitFields(Prisma.InspectorScalarFieldEnum),
        profesiones: {
          ...tipoSelectRef,
        },
      },
    })

    return inspectores.map(({ profesiones, ...rest }) => ({
      profesiones: profesiones.map(({ tipoProfesion }: any) => tipoProfesion),
      ...rest,
    }))
  }

  async getOne(id: number) {
    const { prisma } = this

    return await prisma.inspector.findUnique({
      where: { id },
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
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.inspector.findMany(inspectorSelectRef)
  }

  async create({ profesiones, ...rest }: CreateDto) {
    const { prisma } = this

    return await prisma.inspector.create({
      data: {
        ...(profesiones && {
          profesiones: {
            createMany: {
              data: profesiones.map(id => ({ tipoProfesionId: id })),
            },
          },
        }),
        ...rest,
      },
    })
  }

  async updateOne(id: number, { profesiones, ...rest }: UpdateDto) {
    const { prisma } = this

    return await prisma.inspector.update({
      where: { id },
      data: {
        profesiones:
          profesiones === null
            ? { deleteMany: { inspectorId: id } }
            : {
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
