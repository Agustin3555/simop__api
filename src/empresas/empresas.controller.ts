import { Controller } from '@nestjs/common'
import { EmpresasService } from './empresas.service'
import { Get, Post, Body } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

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

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.empresasService.deleteMany(deleteManyDto)
  }
}
