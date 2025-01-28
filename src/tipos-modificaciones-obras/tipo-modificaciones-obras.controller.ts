import { Body, Controller, Get, Post } from '@nestjs/common'
import { TipoModificacionesObrasService } from './tipo-modificaciones-obras.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('tipo-modificaciones-obra')
export class TipoModificacionesObrasController {
  constructor(
    private readonly tipoModificacionesObrasService: TipoModificacionesObrasService,
  ) {}

  @Get()
  getAll() {
    return this.tipoModificacionesObrasService.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.tipoModificacionesObrasService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tipoModificacionesObrasService.create(createDto)
  }

  @Post('delete-many')
  deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return this.tipoModificacionesObrasService.deleteMany(deleteManyDto)
  }
}
