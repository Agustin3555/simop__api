import { selectFields } from '@/common/helpers/selectFields'
import { Prisma } from '@prisma/client'

export const departamentoSelectRef = selectFields<Prisma.DepartamentoScalarFieldEnum>(
    'nombre',
  )
  