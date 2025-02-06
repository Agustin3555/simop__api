import { Body, Controller, Get, Post } from '@nestjs/common'
import { RecepcionesService } from './recepciones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('recepciones')
export class RecepcionesController {
  constructor(private readonly recepcionesService: RecepcionesService) {}

  @Get()
  getAll() {
    return this.recepcionesService.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.recepcionesService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.recepcionesService.create(createDto)
  }
  @Post('delete-many')
  deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return this.recepcionesService.deleteMany(deleteManyDto)
  }
}
