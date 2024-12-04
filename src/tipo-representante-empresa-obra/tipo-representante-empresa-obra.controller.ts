import { Body, Controller, Get, Post } from '@nestjs/common'
import { TipoRepresentanteEmpresaObraService } from './tipo-representante-empresa-obra.service'
import { CreateDto } from './dto/create.dto'

@Controller('tipo-representante-empresa-obra')
export class TipoRepresentanteObraObraController {
  constructor(
    private readonly tipoRepresentateEmpresaObra: TipoRepresentanteEmpresaObraService,
  ) {}

  @Get()
  getAll() {
    return this.tipoRepresentateEmpresaObra.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.tipoRepresentateEmpresaObra.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tipoRepresentateEmpresaObra.create(createDto)
  }
}
