import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { CreateDto } from './dto/create.dto'
import { tipoSelectRef } from '@/common/dto'
import { DeleteManyDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Injectable()
export class TipoTematicasObrasService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.tipoTematicaObra.findMany()
  }

  async getOne(id: number) {
    const { prisma } = this

    return await prisma.tipoTematicaObra.findUnique({
      where: { id },
    })
  }

  async getRefs() {
    const { prisma } = this

    return await prisma.tipoTematicaObra.findMany(tipoSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.tipoTematicaObra.create({
      data: createDto,
    })
  }

  async updateOne(id: number, data: UpdateDto) {
    const { prisma } = this

    return await prisma.tipoTematicaObra.update({ where: { id }, data })
  }

  async deleteMany(deleteManyDto: DeleteManyDto) {
    const { prisma } = this

    return await prisma.$transaction([
      prisma.tipoTematicaObra.deleteMany({
        where: {
          id: { in: deleteManyDto.ids },
        },
      }),
    ])
  }
}
