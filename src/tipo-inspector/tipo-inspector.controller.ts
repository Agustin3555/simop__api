import { Body, Controller, Get, Post } from '@nestjs/common'
import { TipoInspectorObraService } from './tipo-inspector.service'
import { CreateDto } from './dto/create.dto'

@Controller('tipo-inspector-obra')
export class TipoInspectorObraController {
  constructor(
    private readonly tipoInspectorObraService: TipoInspectorObraService,
  ) {}

  @Get()
  getAll() {
    return this.tipoInspectorObraService.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.tipoInspectorObraService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tipoInspectorObraService.create(createDto)
  }
}
