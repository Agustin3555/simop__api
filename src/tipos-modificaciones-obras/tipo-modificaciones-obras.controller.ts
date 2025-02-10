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
  async getAll() {
    return await this.tipoModificacionesObrasService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.tipoModificacionesObrasService.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.tipoModificacionesObrasService.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.tipoModificacionesObrasService.deleteMany(deleteManyDto)
  }
}
