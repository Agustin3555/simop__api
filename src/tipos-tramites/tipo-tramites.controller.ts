import { Body, Controller, Get, Post } from '@nestjs/common'
import { TipoTramitesObrasService } from './tipo-tramites.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('tipo-tramites-obras')
export class TipoTramitesObrasController {
  constructor(private readonly tipoTramites: TipoTramitesObrasService) {}

  @Get()
  async getAll() {
    return await this.tipoTramites.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.tipoTramites.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.tipoTramites.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.tipoTramites.deleteMany(deleteManyDto)
  }
}
