import { Transform, TransformFnParams } from 'class-transformer'
import { IsInt, IsPositive } from 'class-validator'

export class SearchByIdDto {
  @IsInt()
  @IsPositive()
  @Transform(({ value }: TransformFnParams) => {
    const parsed = parseInt(value, 10)

    return isNaN(parsed) ? undefined : parsed
  })
  id: number
}
