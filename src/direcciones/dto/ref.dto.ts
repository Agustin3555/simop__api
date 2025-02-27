import { selectFields } from '@/common/helpers/selectFields'
import { Prisma } from '@prisma/client'

export const direccionSelectRef =
  selectFields<Prisma.DireccionScalarFieldEnum>('nombre')
