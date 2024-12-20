import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { CreateDto } from './dto/create.dto'

@Injectable()
export class SubSecretariasService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.subSecretaria.findMany()
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.subSecretaria.findMany({
      select: { id: true, nombre: true },
    })
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.subSecretaria.create({
      data: createDto,
    })
  }
}
