import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { Prisma } from '@prisma/client'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'
import { DeleteManyDto } from '@/common/dto'
import { provinciaSelectRef } from './dto/ref.dto'
import { paisSelectRef } from '@/paises/dto/ref.dto'
import { UpdateDto } from './dto/update.dto'

@Injectable()
export class ProvinciasService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.provincia.findMany({
      select: {
        ...omitFields(Prisma.ProvinciaScalarFieldEnum, 'paisId'),
        pais: {
          ...paisSelectRef,
        },
      },
    })
  }
  async getOne(id: number) {
    const { prisma } = this

    return await prisma.provincia.findUnique({
      where: { id },
      select: {
        ...omitFields(Prisma.ProvinciaScalarFieldEnum, 'paisId'),
        pais: {
          ...paisSelectRef,
        },
      },
    })
  }
  async getRefs() {
    const { prisma } = this

    return await prisma.provincia.findMany(provinciaSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.provincia.create({
      data: createDto,
    })
  }

  async updateOne(id: number, data: UpdateDto) {
    const { prisma } = this

    return await prisma.provincia.update({ where: { id }, data })
  }

  async deleteMany(deleteManyDto: DeleteManyDto) {
    const { prisma } = this

    return await prisma.$transaction([
      prisma.provincia.deleteMany({
        where: {
          id: { in: deleteManyDto.ids },
        },
      }),
    ])
  }
}
