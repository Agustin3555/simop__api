import { Controller, Param, Put } from '@nestjs/common'
import { RepresentantesService } from './representantes.service'
import { Get, Post, Body } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('representantes')
export class RepresentantesController {
  constructor(private readonly relEmpresasServices: RepresentantesService) {}

  @Get()
  async getAll() {
    return await this.relEmpresasServices.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.relEmpresasServices.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.relEmpresasServices.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.relEmpresasServices.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.relEmpresasServices.deleteMany(deleteManyDto)
  }
}
