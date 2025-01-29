import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { PrismaService } from '@/prisma.service'
import { Prisma } from '@prisma/client'
import { omitFields } from '@/common/helpers'
import { DeleteManyDto } from '@/common/dto'
import { empresaSelectRef } from './dto/ref.dto'
import { paisSelectRef } from '@/paises/dto/ref.dto'
import { provinciaSelectRef } from '@/provincias/dto/ref.dto'
import { localidadSelectRef } from '@/localidades/dto/ref.dto'

@Injectable()
export class EmpresasService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.empresa.findMany({
      select: {
        ...omitFields(
          Prisma.EmpresaScalarFieldEnum,
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

  async getForConnect() {
    const { prisma } = this

    return await prisma.empresa.findMany(empresaSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.empresa.create({
      data: createDto,
    })
  }
  async deleteMany(deleteManyDto: DeleteManyDto) {
    const { prisma } = this

    return await prisma.$transaction([
      prisma.empresa.deleteMany({
        where: {
          id: { in: deleteManyDto.ids },
        },
      }),
    ])
  }
}
