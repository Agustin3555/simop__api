import { Controller } from '@nestjs/common'
import { RepresentantesEmpresasService } from './representantes-empresas.service'
import { Get, Post, Body } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('representantes-empresas')
export class RepresentantesEmpresasController {
  constructor(
    private readonly representantesEmpresas: RepresentantesEmpresasService,
  ) {}

  @Get()
  getAll() {
    return this.representantesEmpresas.getAll()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.representantesEmpresas.create(createDto)
  }

  @Post('delete-many')
  deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return this.representantesEmpresas.deleteMany(deleteManyDto)
  }
}
