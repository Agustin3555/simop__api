import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'
import { certificacionSelectRef } from './dto/ref.dto'

@Injectable()
export class CertificacionesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.certificacion.findMany()
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
