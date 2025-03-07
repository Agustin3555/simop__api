import { omitFields } from '@/common/helpers'
import { obraSelectRef } from '@/obras/dto/ref.dto'
import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'
import { ampliacionesSelectRef } from './dto/ref.dto'
import { UpdateDto } from './dto/update.dto'

@Injectable()
export class AmpliacionesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.ampliacion.findMany({
      select: {
        ...omitFields(Prisma.AmpliacionScalarFieldEnum, 'obraId'),
        obra: {
          ...obraSelectRef,
        },
      },
    })
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.ampliacion.findMany(ampliacionesSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.ampliacion.create({
      data: createDto,
    })
  }
  async updateOne(id: number, data: UpdateDto) {
    const { prisma } = this

    return await prisma.ampliacion.update({ where: { id }, data })
  }

  async deleteMany(deleteManyDto: DeleteManyDto) {
    const { prisma } = this

    return await prisma.$transaction([
      prisma.ampliacion.deleteMany({
        where: {
          id: { in: deleteManyDto.ids },
        },
      }),
    ])
  }
}
