import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'
import { certificacionSelectRef } from './dto/ref.dto'
import { omitFields } from '@/common/helpers'
import { Prisma } from '@prisma/client'
import { fojaMedicionSelectRef } from '@/fojas-mediciones/dto/ref.dto'
import { UpdateDto } from './dto/update.dto'

@Injectable()
export class CertificacionesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.certificacion.findMany({
      select: {
        ...omitFields(Prisma.CertificacionScalarFieldEnum, 'fojaMedicionId'),
        fojaMedicion: {
          ...fojaMedicionSelectRef,
        },
      },
    })
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.certificacion.findMany(certificacionSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.certificacion.create({
      data: createDto,
    })
  }
  async updateOne(id: number, data: UpdateDto) {
    const { prisma } = this

    return await prisma.certificacion.update({ where: { id }, data })
  }

  async deleteMany(deleteManyDto: DeleteManyDto) {
    const { prisma } = this

    return await prisma.$transaction([
      prisma.certificacion.deleteMany({
        where: {
          id: { in: deleteManyDto.ids },
        },
      }),
    ])
  }
}
