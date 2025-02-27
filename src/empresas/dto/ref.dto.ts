import { selectFields } from '@/common/helpers/selectFields'
import { Prisma } from '@prisma/client'

export const empresaSelectRef = selectFields<Prisma.EmpresaScalarFieldEnum>(
  'cuit',
  'nombre',
)
