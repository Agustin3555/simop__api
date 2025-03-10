import { IsString, IsInt, IsOptional } from 'class-validator'

export class CreateDto {
  @IsString()
  nombre: string

  @IsInt()
  @IsOptional()
  provinciaId?: number
}
