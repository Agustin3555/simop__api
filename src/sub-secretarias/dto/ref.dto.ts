import { selectFields } from '@/common/helpers/selectFields'
import { Prisma } from '@prisma/client'

export const subSecretariaSelectRef = selectFields<Prisma.SubSecretariaScalarFieldEnum>(
    'nombre',
  )
  