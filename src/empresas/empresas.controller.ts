import { Controller } from '@nestjs/common'
import { EmpresasService } from './empresas.service'
import { Get, Post, Body } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'

@Controller('empresas')
export class EmpresasController {
  constructor(private readonly empresasService: EmpresasService) {}

  @Get()
  getAll() {
    return this.empresasService.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.empresasService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.empresasService.create(createDto)
  }
}
