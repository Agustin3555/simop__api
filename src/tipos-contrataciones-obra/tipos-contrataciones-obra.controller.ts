import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { TiposContratacionesObraService } from './tipos-contrataciones-obra.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('tipos-contrataciones-obra')
export class TiposContratacionesObraController {
  constructor(
    private readonly tiposContratacionesObraService: TiposContratacionesObraService,
  ) {}

  @Get()
  async getAll() {
    return await this.tiposContratacionesObraService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.tiposContratacionesObraService.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.tiposContratacionesObraService.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.tiposContratacionesObraService.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.tiposContratacionesObraService.deleteMany(deleteManyDto)
  }
}
