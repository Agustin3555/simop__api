import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { TipoTematicasObrasService } from './tipo-tematicas-obras.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('tipos-tematicas-obra')
export class TipoTematicasObrasController {
  constructor(
    private readonly tipoTematicasObrasService: TipoTematicasObrasService,
  ) {}

  @Get()
  async getAll() {
    return await this.tipoTematicasObrasService.getAll()
  }

  @Get('refs')
  async getRefs() {
    return await this.tipoTematicasObrasService.getRefs()
  }

  @Get(':id')
  async getOne(@Param() params: SearchByIdDto) {
    return await this.tipoTematicasObrasService.getOne(params.id)
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.tipoTematicasObrasService.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.tipoTematicasObrasService.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.tipoTematicasObrasService.deleteMany(deleteManyDto)
  }
}
