import { Controller } from '@nestjs/common'
import { RepresentantesObrasService } from './representantes-obras.service'
import { CreateDto } from './dto/create.dto'
import { Body, Get, Post } from '@nestjs/common'

@Controller('representantes-obras')
export class RepresentantesObrasController {
  constructor(
    private readonly representantesObrasServices: RepresentantesObrasService,
  ) {}

  @Get()
  getAll() {
    return this.representantesObrasServices.getAll()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.representantesObrasServices.create(createDto)
  }
}
