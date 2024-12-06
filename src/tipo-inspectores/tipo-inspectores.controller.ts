import { Body, Controller, Get, Post } from '@nestjs/common'
import { TipoInspectoresObrasService } from './tipo-inspectores.service'
import { CreateDto } from './dto/create.dto'

@Controller('tipo-inspectores-obras')
export class TipoInspectoresObrasController {
  constructor(
    private readonly tipoInspectoresObrasService: TipoInspectoresObrasService,
  ) {}

  @Get()
  getAll() {
    return this.tipoInspectoresObrasService.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.tipoInspectoresObrasService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tipoInspectoresObrasService.create(createDto)
  }
}
