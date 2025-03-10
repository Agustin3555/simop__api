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

  @IsNumber()
  @IsOptional()
  monto?: number

  @IsDateString()
  @IsOptional()
  fecha?: string

  @IsString()
  @IsOptional()
  observaciones?: string

  @IsInt()
  @IsOptional()
  fojaMedicionId?: number
}
