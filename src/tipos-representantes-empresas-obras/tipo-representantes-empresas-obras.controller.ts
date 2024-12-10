import { Body, Controller, Get, Post } from '@nestjs/common'
import { TipoRepresentantesEmpresasObrasService } from './tipo-representantes-empresas-obras.service'
import { CreateDto } from './dto/create.dto'

@Controller('tipos-representantes-empresas-obras')
export class TipoRepresentanteObraObraController {
  constructor(
    private readonly tipoRepresentatesEmpresasObras: TipoRepresentantesEmpresasObrasService,
  ) {}

  @Get()
  getAll() {
    return this.tipoRepresentatesEmpresasObras.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.tipoRepresentatesEmpresasObras.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tipoRepresentatesEmpresasObras.create(createDto)
  }
}
