import {
  IsInt,
  IsOptional,
  IsString,
  IsNumber,
  IsDateString,
} from 'class-validator'

export class UpdateDto {
  @IsString()
  @IsOptional()
  numeroExpediente?: string

  @IsOptional()
  @IsNumber()
  monto?: number

  @IsOptional()
  @IsDateString()
  fecha?: string

  @IsOptional()
  @IsString()
  observaciones?: string

  @IsInt()
  @IsOptional()
  fojaMedicionId?: number
}
