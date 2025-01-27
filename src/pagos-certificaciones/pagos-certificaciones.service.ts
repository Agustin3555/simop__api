import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Injectable()
export class PagosCertificacionesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.pagoCertificacion.findMany()
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.pagoCertificacion.findMany({
      select: { id: true, numero: true },
    })
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
