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
  getAll() {
    return this.tipoFinanciamientosObrasService.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.tipoFinanciamientosObrasService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tipoFinanciamientosObrasService.create(createDto)
  }

  @Post('delete-many')
  deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return this.tipoFinanciamientosObrasService.deleteMany(deleteManyDto)
  }
}
