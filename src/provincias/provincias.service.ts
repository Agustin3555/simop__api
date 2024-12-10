import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { CreateDto } from './dto/create.dto'
@Injectable()
export class ProvinciasService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.provincia.findMany({
      include: {
        pais: true,
      },
    })
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.provincia.findMany({
      select: { id: true, nombre: true },
    })
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.provincia.create({
      data: createDto,
    })
  }
}
