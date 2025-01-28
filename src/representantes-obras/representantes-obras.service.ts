import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'
import { Prisma } from '@prisma/client'
import { tipoSelectRef } from '@/common/dto/tipoSelectRef.dto'
import { obraSelectRef } from '@/obras/dto/ref.dto'
import { representanteSelectRef } from '@/representantes/dto/ref.dto'

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
          obraSelectRef
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

    return await prisma.representanteObra.create({
      data: createDto,
    })
  }
}
