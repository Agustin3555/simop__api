import { Controller, Param, Put } from '@nestjs/common'
import { RepresentantesEmpresasService } from './representantes-empresas.service'
import { Get, Post, Body } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('representantes-empresas')
export class RepresentantesEmpresasController {
  constructor(
    private readonly representantesEmpresas: RepresentantesEmpresasService,
  ) {}

  @Get()
  async getAll() {
    return await this.representantesEmpresas.getAll()
  }

  @Get(':id')
  async getOne(@Param() params: SearchByIdDto) {
    return await this.representantesEmpresas.getOne(params.id)
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.representantesEmpresas.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.representantesEmpresas.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.representantesEmpresas.deleteMany(deleteManyDto)
  }
}
