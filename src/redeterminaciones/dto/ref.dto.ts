import { selectFields } from '@/common/helpers/selectFields'
import { Prisma } from '@prisma/client'

export const redeterminacionesSelectRef =
  selectFields<Prisma.RedeterminacionScalarFieldEnum>('numeroExpediente')
