import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { PaisesService } from './paises.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('paises')
export class PaisesController {
  constructor(private readonly paisService: PaisesService) {}

  @Get()
  async getAll() {
    return await this.paisService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.paisService.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.paisService.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.paisService.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.paisService.deleteMany(deleteManyDto)
  }
}
