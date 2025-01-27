import { IsArray, IsInt, IsOptional, Min } from 'class-validator'

export class DeleteManyDto {
  @IsArray()
  @IsInt({ each: true })
  @Min(1, { each: true })
  @IsOptional()
  ids: number[]
}
