import { Controller } from '@nestjs/common'
import { FojaMedicionesService } from './foja-mediciones.service'
import { CreateDto } from './dto/create.dto'
import { Body, Get, Post } from '@nestjs/common'
@Controller('foja-mediciones')
export class FojaMedicionesController {
  constructor(private readonly fojaMedicionesService: FojaMedicionesService) {}

  @Get()
  getAll() {
    return this.fojaMedicionesService.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.fojaMedicionesService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.fojaMedicionesService.create(createDto)
  }
}
