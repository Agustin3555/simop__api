import { Controller, Param, Put } from '@nestjs/common'
import { LocalidadesService } from './localidades.service'
import { Get, Post, Body } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('localidades')
export class LocalidadesController {
  constructor(private readonly localidadesService: LocalidadesService) {}

  @Get()
  async getAll() {
    return await this.localidadesService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.localidadesService.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.localidadesService.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.localidadesService.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.localidadesService.deleteMany(deleteManyDto)
  }
}
