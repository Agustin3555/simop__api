import { Body, Controller, Get, Post } from '@nestjs/common'
import { TipoParalizacionesObrasService } from './tipo-paralizaciones-obras.service'
import { CreateDto } from './dto/create.dto'

@Controller('tipo-paralizaciones-obras')
export class TipoParalizacionesObrasController {
  constructor(
    private readonly tipoParalizacionesObrasService: TipoParalizacionesObrasService,
  ) {}

  @Get()
  getAll() {
    return this.tipoParalizacionesObrasService.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.tipoParalizacionesObrasService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tipoParalizacionesObrasService.create(createDto)
  }
}
