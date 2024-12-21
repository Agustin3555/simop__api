import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'

@Injectable()
export class CertificacionesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.certificacion.findMany()
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.certificacion.findMany({
      select: { id: true, numeroExpediente: true },
    })
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.certificacion.create({
      data: createDto,
    })
  }
}
