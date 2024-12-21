import { Controller } from '@nestjs/common'
import { PagosCertificacionesService } from './pagos-certificaciones.service'
import { CreateDto } from './dto/create.dto'
import { Body, Get, Post } from '@nestjs/common'
@Controller('pagos-certificaciones')
export class PagosCertificacionesController {
  constructor(
    private readonly pagoCertificacionesService: PagosCertificacionesService,
  ) {}

  @Get()
  getAll() {
    return this.pagoCertificacionesService.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.pagoCertificacionesService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.pagoCertificacionesService.create(createDto)
  }
}
