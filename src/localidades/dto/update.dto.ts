import { IsString, IsInt, IsOptional } from 'class-validator'

export class UpdateDto {
  @IsString()
  @IsOptional()
  nombre?: string

  @IsInt()
  @IsOptional()
  provinciaId?: number
}
