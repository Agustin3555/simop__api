import { selectFields } from '@/common/helpers/selectFields'
import { Prisma } from '@prisma/client'

export const fojaMedicionSelectRef = selectFields<Prisma.FojaMedicionScalarFieldEnum>(
    'numeroExpediente',
  )
  