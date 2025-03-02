import { DeleteManyDto } from '@/common/dto'
import { tipoSelectRef } from '@/common/dto'
import { PrismaService } from '@/prisma.service'
import { CreateDto } from '@/sub-secretarias/dto/create.dto'
import { Injectable } from '@nestjs/common'

@Injectable()
export class TiposRedeterminacionesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.tipoRedeterminacion.findMany()
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.tipoRedeterminacion.findMany(tipoSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.tipoRedeterminacion.create({
      data: createDto,
    })
  }

  async deleteMany(deleteManyDto: DeleteManyDto) {
    const { prisma } = this

    return await prisma.$transaction([
      prisma.tipoRedeterminacion.deleteMany({
        where: {
          id: { in: deleteManyDto.ids },
        },
      }),
    ])
  }
}
