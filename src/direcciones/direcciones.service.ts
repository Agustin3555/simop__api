import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { Prisma } from '@prisma/client'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'

@Injectable()
export class DireccionesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.direccion.findMany({
      select: {
        ...omitFields(Prisma.DireccionScalarFieldEnum, 'subSecretariaId'),
        subSecretaria: {
          select: { id: true, nombre: true },
        },
      },
    })
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.direccion.findMany({
      select: { id: true, nombre: true },
    })
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.direccion.create({
      data: createDto,
    })
  }
}
