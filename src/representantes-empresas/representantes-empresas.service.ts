import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { Prisma } from '@prisma/client'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'
import { tipoSelectRef } from '@/common/dto'
import { empresaSelectRef } from '@/empresas/dto/ref.dto'
import { representanteSelectRef } from '@/representantes/dto/ref.dto'
import { DeleteManyDto } from '@/common/dto'

@Injectable()
export class RepresentantesEmpresasService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.representanteEmpresa.findMany({
      select: {
        ...omitFields(
          Prisma.RepresentanteEmpresaScalarFieldEnum,
          'empresaId',
          'representanteId',
          'tipoRepresentanteId',
        ),
        empresa: {
          ...empresaSelectRef,
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

    return await prisma.representanteEmpresa.create({
      data: createDto,
    })
  }

  async deleteMany(deleteManyDto: DeleteManyDto) {
    const { prisma } = this

    return await prisma.$transaction([
      prisma.representanteEmpresa.deleteMany({
        where: {
          id: { in: deleteManyDto.ids },
        },
      }),
    ])
  }
}
