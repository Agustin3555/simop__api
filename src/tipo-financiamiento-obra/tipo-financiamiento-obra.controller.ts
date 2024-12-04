import { Body, Controller, Get, Post } from '@nestjs/common'
import { TipoFinanciamientoObraService } from './tipo-financiamiento-obra.service'
import { CreateDto } from './dto/create.dto'

@Controller('tipo-financiamiento-obra')
export class TipoFinanciamientoObraController {
  constructor(
    private readonly tipoFinanciamientoObraService: TipoFinanciamientoObraService,
  ) {}

  @Get()
  getAll() {
    return this.tipoFinanciamientoObraService.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.tipoFinanciamientoObraService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tipoFinanciamientoObraService.create(createDto)
  }
}
