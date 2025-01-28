import { selectFields } from '@/common/helpers/selectFields'
import { Prisma } from '@prisma/client'

export const obraSelectRef = selectFields<Prisma.ObraScalarFieldEnum>(
    'numero',
  )
  