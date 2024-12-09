import { Controller } from '@nestjs/common'
import { RelEmpresasRepresentantesService } from './rel-empresas-representantes.service'
import { Get, Post, Body } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
@Controller('rel-empresas-representantes')
export class RelEmpresasRepresentantesController {
  constructor(
    private readonly relEmpresasServices: RelEmpresasRepresentantesService,
  ) {}

  @Get()
  getAll() {
    return this.relEmpresasServices.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.relEmpresasServices.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.relEmpresasServices.create(createDto)
  }
}
