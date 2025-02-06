import { selectFields } from '@/common/helpers/selectFields'
import { Prisma } from '@prisma/client'

export const paralizacionSelectRef =
  selectFields<Prisma.ParalizacionScalarFieldEnum>('numeroExpediente')
