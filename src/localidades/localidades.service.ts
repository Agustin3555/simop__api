import { omitFields } from '@/common/helpers'
import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'
import { localidadSelectRef } from './dto/ref.dto'

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

    return await prisma.localidad.findMany(localidadSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.localidad.create({
      data: createDto,
    })
  }
  async deleteMany(deleteManyDto: DeleteManyDto) {
      const { prisma } = this
  
      return await prisma.$transaction([
        prisma.localidad.deleteMany({
          where: {
            id: { in: deleteManyDto.ids },
          },
        }),
      ])
    }
}
