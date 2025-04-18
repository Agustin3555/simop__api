import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { DepartamentosService } from './departamentos.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('departamentos')
export class DepartamentosController {
  constructor(private readonly departamentosServices: DepartamentosService) {}

  @Get()
  async getAll() {
    return await this.departamentosServices.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.departamentosServices.getForConnect()
  }

  @Get(':id')
  async getOne(@Param() params: SearchByIdDto) {
    return await this.departamentosServices.getOne(params.id)
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.departamentosServices.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.departamentosServices.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.departamentosServices.deleteMany(deleteManyDto)
  }
}
