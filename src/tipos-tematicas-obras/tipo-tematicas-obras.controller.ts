import { Body, Controller, Get, Post } from '@nestjs/common'
import { TipoTematicasObrasService } from './tipo-tematicas-obras.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('tipos-tematicas-obra')
export class TipoTematicasObrasController {
  constructor(
    private readonly tipoTematicasObrasService: TipoTematicasObrasService,
  ) {}

  @Get()
  async getAll() {
    return await this.tipoTematicasObrasService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.tipoTematicasObrasService.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.tipoTematicasObrasService.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.tipoTematicasObrasService.deleteMany(deleteManyDto)
  }
}
