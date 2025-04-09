import { Prisma } from '@prisma/client'

type RelationSelectRef<T> = {
  select: Partial<Record<keyof T, boolean>>
}

type FindManyOptions<
  T extends Record<string, any>,
  R extends Record<string, RelationSelectRef<any>>,
> = {
  /**
   * Campos a excluir de la selección principal
   */
  exclude?: Array<keyof T>
  /**
   * Relaciones con sus respectivos selectRef
   */
  relations?: R
  /**
   * Filtros adicionales (where)
   */
  where?: Prisma.Args<T, 'findMany'>['where']
  /**
   * Ordenación de resultados
   */
  orderBy?: Prisma.Args<T, 'findMany'>['orderBy']
}

export async function customFindMany<
  T extends Record<string, any>,
  R extends Record<string, RelationSelectRef<any>>,
>(
  prismaModel: {
    findMany: (args: any) => Promise<any>
  },
  modelName: Prisma.ModelName,
  options: FindManyOptions<T, R> = {},
) {
  const { exclude = [], relations = {}, where, orderBy } = options

  // Obtener todos los campos escalares del modelo
  const scalarFields = Object.keys(
    Prisma[`${modelName}ScalarFieldEnum`],
  ) as Array<keyof T>

  // Crear el objeto select base
  const select: any = {
    ...scalarFields.reduce(
      (acc, field) => {
        if (!exclude.includes(field)) {
          acc[field] = true
        }
        return acc
      },
      {} as Record<keyof T, boolean>,
    ),
  }

  // Añadir las relaciones con sus selectRef
  Object.keys(relations).forEach(relationKey => {
    select[relationKey] = relations[relationKey]
  })

  // Construir el objeto de consulta
  const query = {
    select,
    where,
    orderBy,
  }

  return await prismaModel.findMany(query)
}
