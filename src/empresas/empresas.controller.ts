import { Controller, Param, Put } from '@nestjs/common'
import { EmpresasService } from './empresas.service'
import { Get, Post, Body } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('empresas')
export class EmpresasController {
  constructor(private readonly empresasService: EmpresasService) {}

  @Get()
  async getAll() {
    return await this.empresasService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.empresasService.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.empresasService.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.empresasService.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.empresasService.deleteMany(deleteManyDto)
  }
}
