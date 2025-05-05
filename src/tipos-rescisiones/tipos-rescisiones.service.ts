import { tipoSelectRef } from '@/common/dto'
import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Injectable()
export class TiposRescisionesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.tipoRescision.findMany()
  }

  async getOne(id: number) {
    const { prisma } = this

    return await prisma.tipoRescision.findUnique({
      where: { id },
    })
  }

  async getRefs() {
    const { prisma } = this

    return await prisma.tipoRescision.findMany(tipoSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.tipoRescision.create({
      data: createDto,
    })
  }

  async updateOne(id: number, data: UpdateDto) {
    const { prisma } = this

    return await prisma.tipoRescision.update({ where: { id }, data })
  }

  async deleteMany(deleteManyDto: DeleteManyDto) {
    const { prisma } = this

    return await prisma.$transaction([
      prisma.tipoRescision.deleteMany({
        where: {
          id: { in: deleteManyDto.ids },
        },
      }),
    ])
  }
}
