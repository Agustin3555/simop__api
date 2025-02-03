import { selectFields } from '@/common/helpers/selectFields'
import { Prisma } from '@prisma/client'

export const ampliacionesSelectRef =
  selectFields<Prisma.AmpliacionScalarFieldEnum>('numero', 'numeroResolucion')
