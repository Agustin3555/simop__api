import { IsString, IsOptional, IsInt } from 'class-validator'

export class CreateDto {
  @IsString()
  nombre: string

  @IsOptional()
  @IsInt()
  provinciaId?: number
}
