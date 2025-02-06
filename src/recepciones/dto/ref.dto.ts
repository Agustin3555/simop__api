import { selectFields } from '@/common/helpers/selectFields'
import { Prisma } from '@prisma/client'

export const recepcionSelectRef =
  selectFields<Prisma.RecepcionScalarFieldEnum>('numeroActa')
