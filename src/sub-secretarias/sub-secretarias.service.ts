import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'
import { subSecretariaSelectRef } from './dto/ref.dto'
import { UpdateDto } from './dto/update.dto'

@Injectable()
export class SubSecretariasService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.subSecretaria.findMany()
  }

  async getOne(id: number) {
    const { prisma } = this

    return await prisma.subSecretaria.findUnique({
      where: { id },
    })
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

  async updateOne(id: number, data: UpdateDto) {
    const { prisma } = this

    return await prisma.subSecretaria.update({ where: { id }, data })
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
