import { Controller } from '@nestjs/common'
import { RepresentantesService } from './representantes.service'
import { Get, Post, Body } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'

@Controller('representantes')
export class RepresentantesController {
  constructor(private readonly relEmpresasServices: RepresentantesService) {}

  @Get()
  getAll() {
    return this.relEmpresasServices.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.relEmpresasServices.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.relEmpresasServices.create(createDto)
  }
}
