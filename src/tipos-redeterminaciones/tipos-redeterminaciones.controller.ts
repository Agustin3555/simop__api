import { Body, Controller, Get, Post } from '@nestjs/common'
import { TiposRedeterminacionesService } from './tipos-redeterminaciones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('tipos-redeterminaciones')
export class TiposRedeterminacionesController {
  constructor(
    private readonly tipoRedeterminaciones: TiposRedeterminacionesService,
  ) {}

  @Get()
  getAll() {
    return this.tipoRedeterminaciones.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.tipoRedeterminaciones.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tipoRedeterminaciones.create(createDto)
  }

  @Post('delete-many')
  deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return this.tipoRedeterminaciones.deleteMany(deleteManyDto)
  }
}
