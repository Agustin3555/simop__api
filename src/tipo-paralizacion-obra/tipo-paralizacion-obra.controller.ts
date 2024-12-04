import { Body, Controller, Get, Post } from '@nestjs/common'
import { TipoParalizacionObraService } from './tipo-paralizacion-obra.service'
import { CreateDto } from './dto/create.dto'

@Controller('tipo-paralizacion-obra')
export class TipoParalizacionObraController {
  constructor(
    private readonly tipoParalizacionObraService: TipoParalizacionObraService,
  ) {}

  @Get()
  getAll() {
    return this.tipoParalizacionObraService.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.tipoParalizacionObraService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tipoParalizacionObraService.create(createDto)
  }
}
