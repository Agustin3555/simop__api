import { Body, Controller, Get, Post } from '@nestjs/common'
import { ProvinciasService } from './provincias.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('provincias')
export class ProvinciasController {
  constructor(private readonly provinciasService: ProvinciasService) {}

  @Get()
  async getAll() {
    return await this.provinciasService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.provinciasService.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.provinciasService.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.provinciasService.deleteMany(deleteManyDto)
  }
}
