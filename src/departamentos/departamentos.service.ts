import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { Prisma } from '@prisma/client'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'
import { DeleteManyDto } from '@/common/dto'
import { departamentoSelectRef } from './dto/ref.dto'
import { direccionSelectRef } from '@/direcciones/dto/ref.dto'
import { UpdateDto } from './dto/update.dto'

@Injectable()
export class DepartamentosService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.departamento.findMany({
      select: {
        ...omitFields(Prisma.DepartamentoScalarFieldEnum, 'direccionId'),
        direccion: {
          ...direccionSelectRef,
        },
      },
    })
  }

  async getOne(id: number) {
    const { prisma } = this

    return await prisma.departamento.findUnique({
      where: { id },
      select: {
        ...omitFields(Prisma.AmpliacionScalarFieldEnum, 'direccionId'),
        direccion: {
          ...direccionSelectRef,
        },
      },
    })
  }

  async getRefs() {
    const { prisma } = this

    return await prisma.departamento.findMany(departamentoSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.departamento.create({
      data: createDto,
    })
  }

  async updateOne(id: number, data: UpdateDto) {
    const { prisma } = this

    return await prisma.departamento.update({ where: { id }, data })
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
