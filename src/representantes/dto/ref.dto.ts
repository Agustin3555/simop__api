import { selectFields } from '@/common/helpers/selectFields'
import { Prisma } from '@prisma/client'

export const representanteSelectRef =
  selectFields<Prisma.RepresentanteScalarFieldEnum>('cuil', 'apellido')
