import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'
import { Prisma } from '@prisma/client'
import { DeleteManyDto } from '@/common/dto'
import { empresaSelectRef } from '@/empresas/dto/ref.dto'
import { tipoSelectRef } from '@/common/dto'
import { localidadSelectRef } from '@/localidades/dto/ref.dto'
import { obraSelectRef } from './dto/ref.dto'
import { UpdateDto } from './dto/update.dto'

@Injectable()
export class ObrasService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const { prisma } = this

    const obras = await prisma.obra.findMany({
      select: {
        ...omitFields(
          Prisma.ObraScalarFieldEnum,
          'empresaId',
          'tipoContratacionObraId',
          'tipoFinanciamientoObraId',
          'tipoProgramaObraId',
          'tipoTematicaObraId',
          'tipoEstadoObraId',
          'localidadId',
        ),
        empresa: {
          ...empresaSelectRef,
        },
        tipoContratacionObra: {
          ...tipoSelectRef,
        },
        tipoFinanciamientoObra: {
          ...tipoSelectRef,
        },
        tipoProgramaObra: {
          ...tipoSelectRef,
        },
        tipoTematicaObra: {
          ...tipoSelectRef,
        },
        tipoEstadoObra: {
          ...tipoSelectRef,
        },
        localidad: {
          ...localidadSelectRef,
        },
      },
    })

    return obras.map(({ montoContratacion, ...rest }) => ({
      montoContratacion: montoContratacion && String(montoContratacion),
      ...rest,
    }))
  }

  async getTotales() {
    const { prisma } = this

    const obras = await prisma.obra.findMany({
      select: {
        id: true,
        numero: true,
        nombre: true,
        montoContratacion: true,
        fechaInicio: true,
        avanceTotal: true,
        empresa: {
          ...empresaSelectRef,
        },
        localidad: {
          ...localidadSelectRef,
        },

        fojasMedicion: {
          select: {
            montoTotal: true,
            pagosCertificacion: {
              select: {
                numero: true,
                ordenPago: true,
                fecha: true,
                monto: true,
              },
            },
          },
        },
        redeterminaciones: {
          select: {
            montoTotal: true,
            pagosCertificacion: {
              select: {
                numero: true,
                ordenPago: true,
                fecha: true,
                monto: true,
              },
            },
          },
        },
      },
    })

    return obras.map(
      ({
        montoContratacion,
        avanceTotal,
        fojasMedicion,
        redeterminaciones,
        ...rest
      }) => {
        const totalCertificadoFojaMedicion = fojasMedicion.reduce(
          (acc, { montoTotal }) => acc + Number(montoTotal),
          0,
        )

        const totalOrdenPagoFojaMedicion = fojasMedicion.reduce(
          (acc, { pagosCertificacion }) => {
            const sum = pagosCertificacion.reduce(
              (acc, { numero, ordenPago, monto }) => {
                const is = numero !== undefined && ordenPago !== undefined

                return is ? acc + Number(monto) : acc
              },
              0,
            )

            return acc + sum
          },
          0,
        )

        const totalPagadoFojaMedicion = fojasMedicion.reduce(
          (acc, { pagosCertificacion }) => {
            const sum = pagosCertificacion.reduce(
              (acc, { numero, ordenPago, fecha, monto }) => {
                const is =
                  numero !== undefined &&
                  ordenPago !== undefined &&
                  fecha !== undefined

                return is ? acc + Number(monto) : acc
              },
              0,
            )

            return acc + sum
          },
          0,
        )

        const totalPendientePagoFojaMedicion =
          totalOrdenPagoFojaMedicion - totalPagadoFojaMedicion

        const totalCertificadoRedeterminacion = redeterminaciones.reduce(
          (acc, { montoTotal }) => acc + Number(montoTotal),
          0,
        )

        const totalOrdenPagoRedeterminacion = redeterminaciones.reduce(
          (acc, { pagosCertificacion }) => {
            const sum = pagosCertificacion.reduce(
              (acc, { numero, ordenPago, monto }) => {
                const is = numero !== undefined && ordenPago !== undefined

                return is ? acc + Number(monto) : acc
              },
              0,
            )

            return acc + sum
          },
          0,
        )

        const totalPagadoRedeterminacion = redeterminaciones.reduce(
          (acc, { pagosCertificacion }) => {
            const sum = pagosCertificacion.reduce(
              (acc, { numero, ordenPago, fecha, monto }) => {
                const is =
                  numero !== undefined &&
                  ordenPago !== undefined &&
                  fecha !== undefined

                return is ? acc + Number(monto) : acc
              },
              0,
            )

            return acc + sum
          },
          0,
        )

        const totalPendientePagoRedeterminacion =
          totalOrdenPagoRedeterminacion - totalPagadoRedeterminacion

        const porcentajePendienteCertificar = 100 - avanceTotal

        const montoPendienteCertificar =
          Number(montoContratacion) -
          Number(montoContratacion) * porcentajePendienteCertificar

        return {
          ...rest,
          montoContratacion: montoContratacion && String(montoContratacion),
          nuevoMonto: undefined,

          totalCertificadoFojaMedicion: String(totalCertificadoFojaMedicion),
          totalOrdenPagoFojaMedicion: String(totalOrdenPagoFojaMedicion),
          totalPagadoFojaMedicion: String(totalPagadoFojaMedicion),
          totalPendientePagoFojaMedicion: String(
            totalPendientePagoFojaMedicion,
          ),

          totalCertificadoRedeterminacion: String(
            totalCertificadoRedeterminacion,
          ),
          totalOrdenPagoRedeterminacion: String(totalOrdenPagoRedeterminacion),
          totalPagadoRedeterminacion: String(totalPagadoRedeterminacion),
          totalPendientePagoRedeterminacion: String(
            totalPendientePagoRedeterminacion,
          ),

          porcentajePendienteCertificar,
          montoPendienteCertificar: String(montoPendienteCertificar),
        }
      },
    )
  }

  async getOne(id: number) {
    const { prisma } = this

    return await prisma.obra.findUnique({
      where: { id },
      select: {
        ...omitFields(
          Prisma.ObraScalarFieldEnum,
          'empresaId',
          'tipoContratacionObraId',
          'tipoFinanciamientoObraId',
          'tipoProgramaObraId',
          'tipoTematicaObraId',
          'tipoEstadoObraId',
          'localidadId',
        ),
        empresa: {
          ...empresaSelectRef,
        },
        tipoContratacionObra: {
          ...tipoSelectRef,
        },
        tipoFinanciamientoObra: {
          ...tipoSelectRef,
        },
        tipoProgramaObra: {
          ...tipoSelectRef,
        },
        tipoTematicaObra: {
          ...tipoSelectRef,
        },
        tipoEstadoObra: {
          ...tipoSelectRef,
        },
        localidad: {
          ...localidadSelectRef,
        },
      },
    })
  }

  async getForConnect() {
    const { prisma } = this

    return await prisma.obra.findMany(obraSelectRef)
  }

  async create(createDto: CreateDto) {
    const { prisma } = this

    return await prisma.obra.create({
      data: createDto,
    })
  }

  async updateOne(id: number, data: UpdateDto) {
    const { prisma } = this

    return await prisma.obra.update({ where: { id }, data })
  }

  async deleteMany(deleteManyDto: DeleteManyDto) {
    const { prisma } = this

    return await prisma.$transaction([
      prisma.obra.deleteMany({
        where: {
          id: { in: deleteManyDto.ids },
        },
      }),
    ])
  }
}
