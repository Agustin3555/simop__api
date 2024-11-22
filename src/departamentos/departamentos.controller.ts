import { Body, Controller, Get, Post } from '@nestjs/common'
import { DepartamentosService } from './departamentos.service'
import { CreateDto } from './dto/create.dto'

@Controller('departamentos')
export class DepartamentosController {
  constructor(private readonly departamentosServices: DepartamentosService) {}

  @Get()
  getAll() {
    return this.departamentosServices.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.departamentosServices.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.departamentosServices.create(createDto)
  }
}
