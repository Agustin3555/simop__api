import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { Prisma } from '@prisma/client'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'
import { tipoSelectRef } from '@/common/dto/tipoSelectRef.dto'
import { empresaSelectRef } from '@/empresas/dto/ref.dto'
import { representanteSelectRef } from '@/representantes/dto/ref.dto'

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
          empresaSelectRef
        },
        representante: {
         representanteSelectRef
        },
        tipoRepresentante: {
          tipoSelectRef
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
}
