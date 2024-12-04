import { Body, Controller, Get, Post } from '@nestjs/common'
import { TipoProfesionObraService } from './tipo-profesion.service'
import { CreateDto } from './dto/create.dto'

@Controller('tipo-profesion-obra')
export class TipoProfesionObraController {
  constructor(
    private readonly tipoProfesionObraService: TipoProfesionObraService,
  ) {}

  @Get()
  getAll() {
    return this.tipoProfesionObraService.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.tipoProfesionObraService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tipoProfesionObraService.create(createDto)
  }
}
