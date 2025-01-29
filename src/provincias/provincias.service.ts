import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { Prisma } from '@prisma/client'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'
import { DeleteManyDto } from '@/common/dto'
import { provinciaSelectRef } from './dto/ref.dto'
import { paisSelectRef } from '@/paises/dto/ref.dto'

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

  async getForConnect() {
    const { prisma } = this

    return await prisma.provincia.findMany(provinciaSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.provincia.create({
      data: createDto,
    })
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
