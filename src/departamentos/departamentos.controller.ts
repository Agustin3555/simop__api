import { Body, Controller, Get, Post } from '@nestjs/common'
import { DepartamentosService } from './departamentos.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

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

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.departamentosServices.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.departamentosServices.deleteMany(deleteManyDto)
  }
}
