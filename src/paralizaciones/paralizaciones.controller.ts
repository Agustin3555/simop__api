import { Body, Controller, Get, Post } from '@nestjs/common'
import { ParalizacionesService } from './paralizaciones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('paralizaciones')
export class ParalizacionesController {
  constructor(private readonly paralizacionesService: ParalizacionesService) {}

  @Get()
  getAll() {
    return this.paralizacionesService.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.paralizacionesService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.paralizacionesService.create(createDto)
  }
  @Post('delete-many')
  deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return this.paralizacionesService.deleteMany(deleteManyDto)
  }
}
