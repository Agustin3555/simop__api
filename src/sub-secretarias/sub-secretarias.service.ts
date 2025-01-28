import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'
import { subSecretariaSelectRef } from './dto/ref.dto'

@Injectable()
export class SubSecretariasService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.subSecretaria.findMany()
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.subSecretaria.findMany(subSecretariaSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.subSecretaria.create({
      data: createDto,
    })
  }

  async deleteMany(deleteManyDto: DeleteManyDto) {
    const { prisma } = this

    return await prisma.$transaction([
      prisma.subSecretaria.deleteMany({
        where: {
          id: { in: deleteManyDto.ids },
        },
      }),
    ])
  }
}
