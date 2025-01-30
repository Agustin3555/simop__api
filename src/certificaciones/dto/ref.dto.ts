import { selectFields } from '@/common/helpers/selectFields'
import { Prisma } from '@prisma/client'

export const certificacionSelectRef =
  selectFields<Prisma.CertificacionScalarFieldEnum>('numeroExpediente')
