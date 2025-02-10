import { Body, Controller, Get, Post } from '@nestjs/common'
import { TiposRecepcionesService } from './tipos-recepciones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('tipos-recepciones')
export class TiposRecepcionesController {
  constructor(
    private readonly tiposRecepcionesService: TiposRecepcionesService,
  ) {}

  @Get()
  async getAll() {
    return await this.tiposRecepcionesService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.tiposRecepcionesService.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.tiposRecepcionesService.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.tiposRecepcionesService.deleteMany(deleteManyDto)
  }
}
