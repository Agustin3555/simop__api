import { omitFields } from '@/common/helpers'
import { PrismaService } from '@/prisma.service'
import { CreateDto } from '@/sub-secretarias/dto/create.dto'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class LocalidadesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.localidad.findMany({
      select: {
        ...omitFields(Prisma.LocalidadScalarFieldEnum, 'provinciaId'),
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

    return await prisma.localidad.findMany({
      select: { id: true, nombre: true },
    })
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.localidad.create({
      data: createDto,
    })
  }
}
