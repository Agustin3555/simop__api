import { Body, Controller, Get, Post } from '@nestjs/common'
import { PaisService } from './pais.service'
import { CreateDto } from './dto/create.dto'

@Controller('pais')
export class PaisController {
  constructor(private readonly paisService: PaisService) {}

  @Get()
  getAll() {
    return this.paisService.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.paisService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.paisService.create(createDto)
  }
}
