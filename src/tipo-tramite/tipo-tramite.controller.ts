import { Body, Controller, Get, Post } from '@nestjs/common'
import { TipoTramiteObraService } from './tipo-tramite.service'
import { CreateDto } from './dto/create.dto'

@Controller('tipo-tramite-obra')
export class TipoTramiteObraController {
  constructor(private readonly tipoTramite: TipoTramiteObraService) {}

  @Get()
  getAll() {
    return this.tipoTramite.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.tipoTramite.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tipoTramite.create(createDto)
  }
}
