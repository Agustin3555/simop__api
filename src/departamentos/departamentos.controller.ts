import { Body, Controller, Get, Post } from '@nestjs/common'
import { DepartamentosService } from './departamentos.service'
import { CreateDto } from './dto/create.dto'

@Controller('departamentos')
export class DepartamentosController {
  constructor(private readonly departamentos: DepartamentosService) {}

  @Get()
  getAll() {
    return this.departamentos.getAll()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.departamentos.create(createDto)
  }
}
