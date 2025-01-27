import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'


@Injectable()
export class PaisesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.pais.findMany()
  }

  async getForConnect() {
    const { prisma } = this;
  
    return await prisma.pais.findMany({
      select: { id: true, nombre: true }, 
    }); 
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.pais.create({
      data: createDto,
    })
  }
  async deleteMany(deleteManyDto: DeleteManyDto) {
      const { prisma } = this
  
      return await prisma.$transaction([
        prisma.pais.deleteMany({
          where: {
            id: { in: deleteManyDto.ids },
          },
        }),
      ])
    }
}
