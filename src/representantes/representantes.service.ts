import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'
import { Prisma } from '@prisma/client'
import { DeleteManyDto } from '@/common/dto'
import { provinciaSelectRef } from '@/provincias/dto/ref.dto'
import { paisSelectRef } from '@/paises/dto/ref.dto'
import { localidadSelectRef } from '@/localidades/dto/ref.dto'

@Injectable()
export class RepresentantesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.representante.findMany()
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.representante.findMany({
      select: {
        ...omitFields(
          Prisma.RepresentanteScalarFieldEnum,
          'paisId',
          'provinciaId',
          'localidadId',
        ),
        pais: {
          ...paisSelectRef,
        },
        provincia: {
          ...provinciaSelectRef,
        },
        localidad: {
          ...localidadSelectRef,
        },
      },
    })
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.representante.create({
      data: createDto,
    })
  }
  async deleteMany(deleteManyDto: DeleteManyDto) {
    const { prisma } = this

    return await prisma.$transaction([
      prisma.representante.deleteMany({
        where: {
          id: { in: deleteManyDto.ids },
        },
      }),
    ])
  }
}
