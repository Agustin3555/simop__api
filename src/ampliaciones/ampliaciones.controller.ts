import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { AmpliacionesService } from './ampliaciones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('ampliaciones')
export class AmpliacionesController {
  constructor(private readonly ampliacionesService: AmpliacionesService) {}

  @Get()
  async getAll() {
    return await this.ampliacionesService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.ampliacionesService.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.ampliacionesService.create(createDto)
  }
  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.ampliacionesService.updateOne(params.id, data)
  }
  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.ampliacionesService.deleteMany(deleteManyDto)
  }
}
