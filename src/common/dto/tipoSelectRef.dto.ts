import { selectFields } from '@/common/helpers/selectFields'
import { Prisma } from '@prisma/client'

export const tipoSelectRef = selectFields<Prisma.TipoEstadoObraScalarFieldEnum>(
    'nombre',
  )
  