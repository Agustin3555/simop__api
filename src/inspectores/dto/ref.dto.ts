import { selectFields } from '@/common/helpers/selectFields'
import { Prisma } from '@prisma/client'

export const inspectorSelectRef = selectFields<Prisma.InspectorScalarFieldEnum>(
  'cuil',
  'apellido',
  'nombre',
)
