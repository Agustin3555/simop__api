import { Body, Controller, Get, Post } from '@nestjs/common'
import { TiposContratacionesObraService } from './tipos-contrataciones-obra.service'
import { CreateDto } from './dto/create.dto'

@Controller('tipos-contrataciones-obra')
export class TiposContratacionesObraController {
  constructor(
    private readonly tiposContratacionesObraService: TiposContratacionesObraService,
  ) {}

  @Get()
  getAll() {
    return this.tiposContratacionesObraService.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.tiposContratacionesObraService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tiposContratacionesObraService.create(createDto)
  }
}
