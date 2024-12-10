import { Controller } from '@nestjs/common'
import { RelObrasRepresentantesService } from './rel-obras-representantes.service'
import { CreateDto } from './dto/create.dto'
import { Body, Get, Post } from '@nestjs/common'

@Controller('rel-obras-representantes')
export class RelObrasRepresentantesController {
  constructor(
    private readonly relObrasRepresentantesServices: RelObrasRepresentantesService,
  ) {}

  @Get()
  getAll() {
    return this.relObrasRepresentantesServices.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.relObrasRepresentantesServices.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.relObrasRepresentantesServices.create(createDto)
  }
}
