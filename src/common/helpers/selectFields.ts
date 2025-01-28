export const selectFields = <T extends string>(...fields: T[]) => ({
  select: ['id', ...fields].reduce(
    (acc, field) => {
      acc[field] = true
      return acc
    },
    {} as Record<T, boolean>,
  ),
})