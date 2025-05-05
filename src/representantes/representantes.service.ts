import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { omitFields } from '@/common/helpers'
import { Prisma } from '@prisma/client'
import { CreateDto } from './dto/create.dto'
import { UpdateDto } from './dto/update.dto'
import { DeleteManyDto } from '@/common/dto'
import { representanteSelectRef } from './dto/ref.dto'
import { paisSelectRef } from '@/paises/dto/ref.dto'
import { provinciaSelectRef } from '@/provincias/dto/ref.dto'
import { localidadSelectRef } from '@/localidades/dto/ref.dto'

@Injectable()
export class RepresentantesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
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

  async getOne(id: number) {
    const { prisma } = this

    return await prisma.representante.findUnique({
      where: { id },
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

  async getRefs() {
    const { prisma } = this

    return await prisma.representante.findMany(representanteSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.representante.create({
      data: createDto,
    })
  }

  async updateOne(id: number, data: UpdateDto) {
    const { prisma } = this

    return await prisma.representante.update({ where: { id }, data })
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
