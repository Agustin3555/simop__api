import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { PrismaService } from '@/prisma.service'

@Injectable()
export class RelEmpresasRepresentantesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.relEmpresaRepresentante.findMany()
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.relEmpresaRepresentante.findMany({
      select: { empresa: true, representante: true },
    })
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.relEmpresaRepresentante.create({
      data: createDto,
    })
  }
}
