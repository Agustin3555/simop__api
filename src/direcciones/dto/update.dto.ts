import { IsInt, IsOptional, IsString, Min } from 'class-validator'

export class UpdateDto {
  @IsString()
  @IsOptional()
  nombre?: string

  @IsInt()
  @Min(1)
  @IsOptional()
  subSecretariaId?: number
}
