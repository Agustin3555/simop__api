import { Controller } from '@nestjs/common'
import { RepresentatesEmpresasService } from './representates-empresas.service'
import { Get, Post, Body } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'

@Controller('representantes-empresas')
export class RepresentatesEmpresasController {
  constructor(
    private readonly representantesEmpresas: RepresentatesEmpresasService,
  ) {}

  @Get()
  getAll() {
    return this.representantesEmpresas.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.representantesEmpresas.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.representantesEmpresas.create(createDto)
  }
}
