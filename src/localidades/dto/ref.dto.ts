import { selectFields } from '@/common/helpers/selectFields'
import { Prisma } from '@prisma/client'

export const localidadSelectRef = selectFields<Prisma.LocalidadScalarFieldEnum>(
    'nombre',
  )
  