import { IsArray, IsInt, IsOptional, IsString, Min } from 'class-validator'

export class CreateDto {
  @IsInt()
  @IsOptional()
  cuil: number

  @IsString()
  @IsOptional()
  apellido: string

  @IsString()
  nombre: string

  @IsArray()
  @IsInt({ each: true })
  @Min(1, { each: true })
  @IsOptional()
  profesiones?: number[]
}
