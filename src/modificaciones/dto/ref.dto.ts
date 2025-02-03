import { selectFields } from '@/common/helpers/selectFields'
import { Prisma } from '@prisma/client'

export const modificacionesSelectRef =
  selectFields<Prisma.ModificacionScalarFieldEnum>('numeroExpediente')
