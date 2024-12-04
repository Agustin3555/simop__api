import { Body, Controller, Get, Post } from '@nestjs/common'
import { ProvinciaService } from './provincia.service'
import { CreateDto } from './dto/create.dto'

@Controller('provincia')
export class ProvinciaController {
  constructor(private readonly provinciaService: ProvinciaService) {}

  @Get()
  getAll() {
    return this.provinciaService.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.provinciaService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.provinciaService.create(createDto)
  }
}
