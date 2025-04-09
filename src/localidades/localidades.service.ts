import { omitFields } from '@/common/helpers'
import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'
import { localidadSelectRef } from './dto/ref.dto'
import { provinciaSelectRef } from '@/provincias/dto/ref.dto'
import { UpdateDto } from './dto/update.dto'

@Injectable()
export class LocalidadesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.localidad.findMany({
      select: {
        ...omitFields(Prisma.LocalidadScalarFieldEnum, 'provinciaId'),
        provincia: {
          ...provinciaSelectRef,
        },
      },
    })
  }

  async getOne(id: number) {
    const { prisma } = this

    return await prisma.localidad.findUnique({
      where: { id },
      select: {
        ...omitFields(Prisma.LocalidadScalarFieldEnum, 'provinciaId'),
        provincia: {
          ...provinciaSelectRef,
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

  async updateOne(id: number, data: UpdateDto) {
    const { prisma } = this

    return await prisma.localidad.update({ where: { id }, data })
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
