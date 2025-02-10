import { Controller } from '@nestjs/common'
import { RepresentantesService } from './representantes.service'
import { Get, Post, Body } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

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

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.relEmpresasServices.deleteMany(deleteManyDto)
  }
}
