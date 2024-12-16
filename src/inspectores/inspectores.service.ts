import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'
import { Prisma } from '@prisma/client'

@Injectable()
export class InspectoresService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    const inspectors = await prisma.inspector.findMany({
      select: {
        ...omitFields(Prisma.InspectorScalarFieldEnum),
        tiposProfesiones: {
          select: {
            tipoProfesion: {
              select: { id: true, nombre: true },
            },
          },
        },
      },
    })

    return inspectors.map(({ tiposProfesiones, ...rest }) => ({
      tiposProfesiones: tiposProfesiones.map(
        ({ tipoProfesion }: any) => tipoProfesion,
      ),
      ...rest,
    }))
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.inspector.findMany({
      select: { id: true, apellido: true },
    })
  }

  async create({ tiposProfesiones, ...rest }: CreateDto) {
    const { prisma } = this

    return await prisma.inspector.create({
      data: {
        tiposProfesiones: {
          create: tiposProfesiones.map(id => ({ tipoProfesionId: id })),
        },
        ...rest,
      },
    })
  }
}
