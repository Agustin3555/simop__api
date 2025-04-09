import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'
import { Prisma } from '@prisma/client'
import { tipoSelectRef } from '@/common/dto'
import { obraSelectRef } from '@/obras/dto/ref.dto'
import { representanteSelectRef } from '@/representantes/dto/ref.dto'
import { DeleteManyDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Injectable()
export class RepresentantesObrasService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.representanteObra.findMany({
      select: {
        ...omitFields(
          Prisma.RepresentanteObraScalarFieldEnum,
          'obraId',
          'representanteId',
          'tipoRepresentanteId',
        ),
        obra: {
          ...obraSelectRef,
        },
        representante: {
          ...representanteSelectRef,
        },
        tipoRepresentante: {
          ...tipoSelectRef,
        },
      },
    })
  }

  async getOne(id: number) {
    const { prisma } = this

    return await prisma.representanteObra.findUnique({
      where: { id },
      select: {
        ...omitFields(
          Prisma.RepresentanteObraScalarFieldEnum,
          'obraId',
          'representanteId',
          'tipoRepresentanteId',
        ),
        obra: {
          ...obraSelectRef,
        },
        representante: {
          ...representanteSelectRef,
        },
        tipoRepresentante: {
          ...tipoSelectRef,
        },
      },
    })
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.representanteObra.create({
      data: createDto,
    })
  }

  async updateOne(id: number, data: UpdateDto) {
    const { prisma } = this

    return await prisma.representanteObra.update({ where: { id }, data })
  }

  async deleteMany(deleteManyDto: DeleteManyDto) {
    const { prisma } = this

    return await prisma.$transaction([
      prisma.representanteObra.deleteMany({
        where: {
          id: { in: deleteManyDto.ids },
        },
      }),
    ])
  }
}
