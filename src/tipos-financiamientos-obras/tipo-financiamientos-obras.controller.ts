import { Body, Controller, Get, Post } from '@nestjs/common'
import { TipoFinanciamientosObrasService } from './tipo-financiamientos-obras.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('tipos-financiamientos-obra')
export class TipoFinanciamientosObrasController {
  constructor(
    private readonly tipoFinanciamientosObrasService: TipoFinanciamientosObrasService,
  ) {}

  @Get()
  async getAll() {
    return await this.tipoFinanciamientosObrasService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.tipoFinanciamientosObrasService.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.tipoFinanciamientosObrasService.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.tipoFinanciamientosObrasService.deleteMany(deleteManyDto)
  }
}
