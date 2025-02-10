import { Body, Controller, Get, Post } from '@nestjs/common'
import { TipoEstadosObrasService } from './tipo-estados-obras.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('tipos-estados-obra')
export class TipoEstadosObrasController {
  constructor(
    private readonly tipoEstadosObrasService: TipoEstadosObrasService,
  ) {}

  @Get()
  async getAll() {
    return await this.tipoEstadosObrasService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.tipoEstadosObrasService.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.tipoEstadosObrasService.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.tipoEstadosObrasService.deleteMany(deleteManyDto)
  }
}
