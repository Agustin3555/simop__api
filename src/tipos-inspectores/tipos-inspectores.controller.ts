import { Body, Controller, Get, Post } from '@nestjs/common'
import { TiposInspectoresService } from './tipos-inspectores.service'
import { CreateDto } from './dto/create.dto'

@Controller('tipos-inspectores')
export class TiposInspectoresController {
  constructor(
    private readonly tiposInspectoresService: TiposInspectoresService,
  ) {}

  @Get()
  getAll() {
    return this.tiposInspectoresService.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.tiposInspectoresService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tiposInspectoresService.create(createDto)
  }
}