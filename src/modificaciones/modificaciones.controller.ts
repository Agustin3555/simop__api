import { Body, Controller, Get, Post } from '@nestjs/common'
import { ModificacionesService } from './modificaciones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('modificaciones')
export class ModificacionesController {
  constructor(private readonly modificacionesService: ModificacionesService) {}

  @Get()
  getAll() {
    return this.modificacionesService.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.modificacionesService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.modificacionesService.create(createDto)
  }
  @Post('delete-many')
  deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return this.modificacionesService.deleteMany(deleteManyDto)
  }
}
