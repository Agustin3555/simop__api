import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { PrismaService } from '@/prisma.service'
import { Prisma } from '@prisma/client'
import { omitFields } from '@/common/helpers'

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

  async getForConnect() {
    const { prisma } = this

    return await prisma.empresa.findMany({
      select: { id: true, nombre: true },
    })
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.empresa.create({
      data: createDto,
    })
  }
}
