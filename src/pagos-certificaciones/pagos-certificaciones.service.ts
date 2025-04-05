import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'
import { pagoCertificacionSelectRef } from './dto/ref.dto'
import { omitFields } from '@/common/helpers'
import { Prisma } from '@prisma/client'
import { UpdateDto } from './dto/update.dto'
import { direccionSelectRef } from '@/direcciones/dto/ref.dto'
import { departamentoSelectRef } from '@/departamentos/dto/ref.dto'
import { fojaMedicionSelectRef } from '@/fojas-mediciones/dto/ref.dto'
import { redeterminacionesSelectRef } from '@/redeterminaciones/dto/ref.dto'

@Injectable()
export class PagosCertificacionesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    return await prisma.pagoCertificacion.findMany({
      select: {
        ...omitFields(
          Prisma.PagoCertificacionScalarFieldEnum,
          'fojaMedicionId',
          'direccionId',
          'departamentoId',
          'redeterminacionId',
        ),
        fojaMedicion: {
          ...fojaMedicionSelectRef,
        },
        direccion: {
          ...direccionSelectRef,
        },
        departamento: {
          ...departamentoSelectRef,
        },
        redeterminacion: {
          ...redeterminacionesSelectRef,
        },
      },
    })
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.pagoCertificacion.findMany(pagoCertificacionSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.pagoCertificacion.create({
      data: createDto,
    })
  }

  async updateOne(id: number, data: UpdateDto) {
    const { prisma } = this

    return await prisma.pagoCertificacion.update({ where: { id }, data })
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
