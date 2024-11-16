import { IsInt, IsOptional, IsString, Min } from 'class-validator'

export class CreateDto {
  @IsString()
  nombre: string

  @IsInt()
  @Min(1)
  @IsOptional()
  subSecretariaId?: number
}
