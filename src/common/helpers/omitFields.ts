export const omitFields = <T extends Record<string, any>>(
  modelFields: T,
  omitKeys: (keyof T)[],
) =>
  Object.values(modelFields).reduce(
    (acc, key) => {
      if (!omitKeys.includes(key as keyof T)) acc[key] = true
      return acc
    },
    {} as Partial<Record<keyof T, boolean>>,
  )
