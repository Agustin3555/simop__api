import { Body, Controller, Get, Post } from '@nestjs/common'
import { SubSecretariasService } from './sub-secretarias.service'
import { CreateDto } from './dto/create.dto'

@Controller('sub-secretarias')
export class SubSecretariasController {
  constructor(private readonly subSecretariasService: SubSecretariasService) {}

  @Get()
  getAll() {
    return this.subSecretariasService.getAll()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.subSecretariasService.create(createDto)
  }
}