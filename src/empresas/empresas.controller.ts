import { Controller } from '@nestjs/common'
import { EmpresasService } from './empresas.service'
import { Get, Post, Body } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('empresas')
export class EmpresasController {
  constructor(private readonly empresasService: EmpresasService) {}

  @Get()
  getAll() {
    return this.empresasService.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.empresasService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.empresasService.create(createDto)
  }
  @Post('delete-many')
    deleteMany(@Body() deleteManyDto: DeleteManyDto) {
      return this.empresasService.deleteMany(deleteManyDto)
    }
}
