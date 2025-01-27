import { Body, Controller, Get, Post } from '@nestjs/common'
import { DepartamentosService } from './departamentos.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('departamentos')
export class DepartamentosController {
  constructor(private readonly departamentosServices: DepartamentosService) {}

  @Get()
  getAll() {
    return this.departamentosServices.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.departamentosServices.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.departamentosServices.create(createDto)
  }
  @Post('delete-many')
    deleteMany(@Body() deleteManyDto: DeleteManyDto) {
      return this.departamentosServices.deleteMany(deleteManyDto)
    }
}
