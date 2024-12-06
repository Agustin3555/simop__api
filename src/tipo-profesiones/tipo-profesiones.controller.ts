import { Body, Controller, Get, Post } from '@nestjs/common'
import { TipoProfesionesObrasService } from './tipo-profesiones.service'
import { CreateDto } from './dto/create.dto'

@Controller('tipo-profesiones-obras')
export class TipoProfesionObraController {
  constructor(
    private readonly tipoProfesionesObrasService: TipoProfesionesObrasService,
  ) {}

  @Get()
  getAll() {
    return this.tipoProfesionesObrasService.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.tipoProfesionesObrasService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tipoProfesionesObrasService.create(createDto)
  }
}
