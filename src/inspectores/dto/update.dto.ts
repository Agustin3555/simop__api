import { IsArray, IsInt, IsOptional, IsString, Min } from 'class-validator'

export class UpdateDto {
  @IsString()
  @IsOptional()
  cuil?: string

  @IsString()
  @IsOptional()
  apellido?: string

  @IsString()
  @IsOptional()
  nombre?: string

  @IsArray()
  @IsInt({ each: true })
  @Min(1, { each: true })
  @IsOptional()
  profesiones?: number[]
}
