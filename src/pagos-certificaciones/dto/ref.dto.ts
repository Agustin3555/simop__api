import { selectFields } from '@/common/helpers/selectFields'
import { Prisma } from '@prisma/client'

export const pagoCertificacionSelectRef = selectFields<Prisma.PagoCertificacionScalarFieldEnum>(
    'numero',
  )
  