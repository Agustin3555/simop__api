import { selectFields } from '@/common/helpers/selectFields'
import { Prisma } from '@prisma/client'

export const rescisionSelectRef =
  selectFields<Prisma.RescisionScalarFieldEnum>('numeroExpediente')
