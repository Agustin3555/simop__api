import { Body, Controller, Get, Post } from '@nestjs/common'
import { DireccionesService } from './direcciones.service'
import { CreateDto } from './dto/create.dto'

@Controller('direcciones')
export class DireccionesController {
  constructor(private readonly direccionesService: DireccionesService) {}

  @Get()
  getAll() {
    return this.direccionesService.getAll()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.direccionesService.create(createDto)
  }
}