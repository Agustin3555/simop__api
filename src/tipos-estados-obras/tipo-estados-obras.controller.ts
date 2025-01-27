import { Body, Controller, Get, Post } from '@nestjs/common'
import { TipoEstadosObrasService } from './tipo-estados-obras.service'
import { CreateDto } from './dto/create.dto'

@Controller('tipos-estados-obra')
export class TipoEstadosObrasController {
  constructor(
    private readonly tipoEstadosObrasService: TipoEstadosObrasService,
  ) {}

  @Get()
  getAll() {
    return this.tipoEstadosObrasService.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.tipoEstadosObrasService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tipoEstadosObrasService.create(createDto)
  }
}
