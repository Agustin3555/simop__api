import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { CreateDto } from './dto/create.dto'
import { tipoSelectRef } from '@/common/dto'
import { DeleteManyDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Injectable()
export class TipoEstadosObrasService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.tipoEstadoObra.findMany()
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.tipoEstadoObra.findMany(tipoSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.tipoEstadoObra.create({
      data: createDto,
    })
  }
  async updateOne(id: number, data: UpdateDto) {
    const { prisma } = this

    return await prisma.tipoEstadoObra.update({ where: { id }, data })
  }

  async deleteMany(deleteManyDto: DeleteManyDto) {
    const { prisma } = this

    return await prisma.$transaction([
      prisma.tipoEstadoObra.deleteMany({
        where: {
          id: { in: deleteManyDto.ids },
        },
      }),
    ])
  }
}
