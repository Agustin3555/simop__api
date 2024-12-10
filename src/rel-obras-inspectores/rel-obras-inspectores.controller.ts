import { Controller } from '@nestjs/common'
import { RelObrasInspectoresService } from './rel-obras-inspectores.service'
import { CreateDto } from './dto/create.dto'
import { Body, Get, Post } from '@nestjs/common'
@Controller('rel-obras-inspectores')
export class RelObrasInspectoresController {
  constructor(
    private readonly relObrasInspectoresService: RelObrasInspectoresService,
  ) {}

  @Get()
  getAll() {
    return this.relObrasInspectoresService.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.relObrasInspectoresService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.relObrasInspectoresService.create(createDto)
  }
}
