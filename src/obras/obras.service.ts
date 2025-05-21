import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { omitFields } from '@/common/helpers'
import { Prisma } from '@prisma/client'
import { DeleteManyDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'
import { empresaSelectRef } from '@/empresas/dto/ref.dto'
import { tipoSelectRef } from '@/common/dto'
import { localidadSelectRef } from '@/localidades/dto/ref.dto'
import { obraSelectRef } from './dto/ref.dto'
import { ampliacionesSelectRef } from '@/ampliaciones/dto/ref.dto'
import { representanteSelectRef } from '@/representantes/dto/ref.dto'
import { inspectorSelectRef } from '@/inspectores/dto/ref.dto'
import { paralizacionSelectRef } from '@/paralizaciones/dto/ref.dto'
import { rescisionSelectRef } from '@/rescisiones/dto/ref.dto'
import { recepcionSelectRef } from '@/recepciones/dto/ref.dto'
import { fojaMedicionSelectRef } from '@/fojas-mediciones/dto/ref.dto'
import { redeterminacionesSelectRef } from '@/redeterminaciones/dto/ref.dto'
import { modificacionesSelectRef } from '@/modificaciones/dto/ref.dto'

const obraSelectForTotales = {
  fojasMedicion: {
    select: {
      ...fojaMedicionSelectRef.select,
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
      ...redeterminacionesSelectRef.select,
      montoTotal: true,
      nuevoMontoObra: true,
      fechaRedeterminacion: true,
      tipoRedeterminacion: {
        select: {
          nombre: true,
        },
      },
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
  modificaciones: {
    select: {
      ...modificacionesSelectRef.select,
      monto: true,
      tipoModificacion: {
        select: {
          nombre: true,
        },
      },
    },
  },
}

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

  async getAllTotales() {
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
        tipoEstadoObra: {
          ...tipoSelectRef,
        },
        ...obraSelectForTotales,
      },
    })

    return obras.map(
      ({
        montoContratacion,
        avanceTotal,
        fojasMedicion,
        redeterminaciones,
        modificaciones,
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

        const porcentajePendienteCertificar = parseFloat(
          (100 - avanceTotal).toFixed(4),
        )

        const balanceEconomico = modificaciones.reduce(
          (acc, { monto, tipoModificacion }) => {
            const negative = tipoModificacion.nombre === 'Economía'

            return acc + Number(monto) * (negative ? -1 : 1)
          },
          0,
        )

        const redeterminacionMasReciente = redeterminaciones
          .filter(({ tipoRedeterminacion }) => {
            if (!tipoRedeterminacion) return

            return (
              tipoRedeterminacion.nombre ===
              'Redeterminación Definitiva Parcial'
            )
          })
          .reduce((másReciente, actual) => {
            return !másReciente ||
              new Date(actual.fechaRedeterminacion) >
                new Date(másReciente.fechaRedeterminacion)
              ? actual
              : másReciente
          }, null)

        const { nuevoMontoObra } = redeterminacionMasReciente ?? {}

        const nuevoMonto =
          Number(
            nuevoMontoObra === undefined ? montoContratacion : nuevoMontoObra,
          ) + balanceEconomico

        const montoPendienteCertificar = parseFloat(
          ((porcentajePendienteCertificar * nuevoMonto) / 100).toFixed(4),
        )

        return {
          ...rest,
          montoContratacion: montoContratacion && String(montoContratacion),
          avanceTotal,

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
          balanceEconomico: String(balanceEconomico),
          nuevoMonto: String(nuevoMonto),
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

  async getOneDetalle(id: number) {
    const { prisma } = this

    const obra = await prisma.obra.findUnique({
      where: { id },
      select: {
        id: true,
        numero: true,
        nombre: true,
        numeroExpediente: true,
        numeroResolucion: true,
        anioResolucion: true,
        numeroContratacion: true,
        fechaContratacion: true,
        montoContratacion: true,
        fechaInicio: true,
        fechaFin: true,
        plazoMeses: true,
        plazoDias: true,
        direccion: true,
        lugar: true,
        nomenclaturaCatastral: true,
        observaciones: true,
        avanceTotal: true,

        empresa: empresaSelectRef,
        tipoContratacionObra: tipoSelectRef,
        tipoFinanciamientoObra: tipoSelectRef,
        tipoProgramaObra: tipoSelectRef,
        tipoTematicaObra: tipoSelectRef,
        tipoEstadoObra: tipoSelectRef,
        localidad: localidadSelectRef,

        ...obraSelectForTotales,

        representantes: {
          select: {
            representante: representanteSelectRef,
          },
        },
        inspectores: {
          select: {
            inspector: inspectorSelectRef,
          },
        },
        ampliaciones: ampliacionesSelectRef,
        paralizaciones: paralizacionSelectRef,
        rescisiones: rescisionSelectRef,
        recepciones: recepcionSelectRef,
      },
    })

    const {
      montoContratacion,
      avanceTotal,

      representantes,
      inspectores,
      fojasMedicion,
      redeterminaciones,
      ampliaciones,
      modificaciones,
      paralizaciones,
      rescisiones,
      recepciones,

      ...rest
    } = obra

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

    const balanceEconomico = modificaciones.reduce(
      (acc, { monto, tipoModificacion }) => {
        const negative = tipoModificacion.nombre === 'Economía'

        return acc + Number(monto) * (negative ? -1 : 1)
      },
      0,
    )

    const redeterminacionMasReciente = redeterminaciones
      .filter(({ tipoRedeterminacion }) => {
        if (!tipoRedeterminacion) return

        return (
          tipoRedeterminacion.nombre === 'Redeterminación Definitiva Parcial'
        )
      })
      .reduce((másReciente, actual) => {
        return !másReciente ||
          new Date(actual.fechaRedeterminacion) >
            new Date(másReciente.fechaRedeterminacion)
          ? actual
          : másReciente
      }, null)

    const { nuevoMontoObra } = redeterminacionMasReciente ?? {}

    const nuevoMonto =
      Number(
        nuevoMontoObra === undefined ? montoContratacion : nuevoMontoObra,
      ) + balanceEconomico

    const montoPendienteCertificar =
      (porcentajePendienteCertificar * nuevoMonto) / 100

    return {
      ...rest,
      montoContratacion: montoContratacion && String(montoContratacion),
      avanceTotal,

      totalCertificadoFojaMedicion: String(totalCertificadoFojaMedicion),
      totalOrdenPagoFojaMedicion: String(totalOrdenPagoFojaMedicion),
      totalPagadoFojaMedicion: String(totalPagadoFojaMedicion),
      totalPendientePagoFojaMedicion: String(totalPendientePagoFojaMedicion),

      totalCertificadoRedeterminacion: String(totalCertificadoRedeterminacion),
      totalOrdenPagoRedeterminacion: String(totalOrdenPagoRedeterminacion),
      totalPagadoRedeterminacion: String(totalPagadoRedeterminacion),
      totalPendientePagoRedeterminacion: String(
        totalPendientePagoRedeterminacion,
      ),

      porcentajePendienteCertificar,
      montoPendienteCertificar: String(montoPendienteCertificar),
      balanceEconomico: String(balanceEconomico),
      nuevoMonto: String(nuevoMonto),

      representantes: representantes.map(({ representante }) => representante),
      inspectores: inspectores.map(({ inspector }) => inspector),
      fojasMedicion,
      redeterminaciones,
      ampliaciones,
      modificaciones,
      paralizaciones,
      rescisiones,
      recepciones,
    }
  }

  async getRefs() {
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
