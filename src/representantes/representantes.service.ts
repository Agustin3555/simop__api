import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'
import { Prisma } from '@prisma/client'
import { DeleteManyDto } from '@/common/dto'

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
          select: { id: true, nombre: true },
        },
        provincia: {
          select: { id: true, nombre: true },
        },
        localidad: {
          select: { id: true, nombre: true },
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
