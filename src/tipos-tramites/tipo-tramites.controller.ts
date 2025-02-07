import { Body, Controller, Get, Post } from '@nestjs/common'
import { TipoTramitesObrasService } from './tipo-tramites.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('tipo-tramites-obras')
export class TipoTramitesObrasController {
  constructor(private readonly tipoTramites: TipoTramitesObrasService) {}

  @Get()
  getAll() {
    return this.tipoTramites.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.tipoTramites.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tipoTramites.create(createDto)
  }

  @Post('delete-many')
  deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return this.tipoTramites.deleteMany(deleteManyDto)
  }
}
