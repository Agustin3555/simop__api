import { selectFields } from '@/common/helpers/selectFields'
import { Prisma } from '@prisma/client'

export const paisSelectRef = selectFields<Prisma.PaisScalarFieldEnum>(
    'nombre',
  )
  