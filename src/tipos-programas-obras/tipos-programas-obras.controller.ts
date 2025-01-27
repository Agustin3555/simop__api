import { Controller } from '@nestjs/common'
import { Get, Post, Body } from '@nestjs/common'
import { TiposProgramasObrasService } from './tipos-programas-obras.service'
import { CreateDto } from './dto/create.dto'

@Controller('tipos-programas-obra')
export class TiposProgramasObrasController {
  constructor(
    private readonly tipoProgramasObras: TiposProgramasObrasService,
  ) {}

  @Get()
  getAll() {
    return this.tipoProgramasObras.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.tipoProgramasObras.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tipoProgramasObras.create(createDto)
  }
}
