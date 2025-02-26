import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'
import { pagoCertificacionSelectRef } from './dto/ref.dto'
import { omitFields } from '@/common/helpers'
import { Prisma } from '@prisma/client'
import { certificacionSelectRef } from '@/certificaciones/dto/ref.dto'

@Injectable()
export class PagosCertificacionesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.pagoCertificacion.findMany({
      select: {
        ...omitFields(
          Prisma.PagoCertificacionScalarFieldEnum,
          'certificacionId',
        ),
        certificacion: { ...certificacionSelectRef },
      },
    })
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.pagoCertificacion.findMany(pagoCertificacionSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.pagoCertificacion.create({
      data: createDto,
    })
  }
  async deleteMany(deleteManyDto: DeleteManyDto) {
    const { prisma } = this

    return await prisma.$transaction([
      prisma.pagoCertificacion.deleteMany({
        where: {
          id: { in: deleteManyDto.ids },
        },
      }),
    ])
  }
}
