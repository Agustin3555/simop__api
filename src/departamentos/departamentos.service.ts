import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { Prisma } from '@prisma/client'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'
import { DeleteManyDto } from '@/common/dto'

@Injectable()
export class DepartamentosService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.departamento.findMany({
      select: {
        ...omitFields(Prisma.DepartamentoScalarFieldEnum, 'direccionId'),
        direccion: {
          select: { id: true, nombre: true },
        },
      },
    })
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.departamento.findMany({
      select: { id: true, nombre: true },
    })
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.departamento.create({
      data: createDto,
    })
  }
   async deleteMany(deleteManyDto: DeleteManyDto) {
      const { prisma } = this
  
      return await prisma.$transaction([
        prisma.departamento.deleteMany({
          where: {
            id: { in: deleteManyDto.ids },
          },
        }),
      ])
    }
}
