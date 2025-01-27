import { Body, Controller, Get, Post } from '@nestjs/common'
import { InspectoresService } from './inspectores.service'
import { CreateDto } from './dto/create.dto'

@Controller('inspectores')
export class InspectoresController {
  constructor(private readonly inspectoresService: InspectoresService) {}

  @Get()
  getAll() {
    return this.inspectoresService.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.inspectoresService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.inspectoresService.create(createDto)
  }
}
