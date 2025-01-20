import { Controller } from '@nestjs/common'
import { InspectoresObrasService } from './inspectores-obras.service'
import { CreateDto } from './dto/create.dto'
import { Body, Get, Post } from '@nestjs/common'

@Controller('inspectores-obras')
export class InspectoresObrasController {
  constructor(private readonly service: InspectoresObrasService) {}

  @Get()
  getAll() {
    return this.service.getAll()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.service.create(createDto)
  }
}
