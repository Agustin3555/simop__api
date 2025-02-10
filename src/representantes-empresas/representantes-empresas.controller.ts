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
  async getAll() {
    return await this.representantesEmpresas.getAll()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.representantesEmpresas.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.representantesEmpresas.deleteMany(deleteManyDto)
  }
}
