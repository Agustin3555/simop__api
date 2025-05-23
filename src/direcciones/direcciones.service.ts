import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { Prisma } from '@prisma/client'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'
import { DeleteManyDto } from '@/common/dto'
import { direccionSelectRef } from './dto/ref.dto'
import { subSecretariaSelectRef } from '@/sub-secretarias/dto/ref.dto'
import { UpdateDto } from './dto/update.dto'

@Injectable()
export class DireccionesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.direccion.findMany({
      select: {
        ...omitFields(Prisma.DireccionScalarFieldEnum, 'subSecretariaId'),
        subSecretaria: {
          ...subSecretariaSelectRef,
        },
      },
    })
  }

  async getRefs() {
    const { prisma } = this

    return await prisma.direccion.findMany(direccionSelectRef)
  }

  async getOne(id: number) {
    const { prisma } = this

    return await prisma.direccion.findUnique({
      where: { id },
      select: {
        ...omitFields(Prisma.DireccionScalarFieldEnum, 'subSecretariaId'),
        subSecretaria: {
          ...subSecretariaSelectRef,
        },
      },
    })
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.direccion.create({
      data: createDto,
    })
  }

  async updateOne(id: number, data: UpdateDto) {
    const { prisma } = this

    return await prisma.direccion.update({ where: { id }, data })
  }

  async deleteMany(deleteManyDto: DeleteManyDto) {
    const { prisma } = this

    return await prisma.$transaction([
      prisma.direccion.deleteMany({
        where: {
          id: { in: deleteManyDto.ids },
        },
      }),
    ])
  }
}
