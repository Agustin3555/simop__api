import { RedeterminacionesService } from './redeterminaciones.service'
import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('redeterminaciones')
export class RedeterminacionesController {
  constructor(
    private readonly redeterminacionesService: RedeterminacionesService,
  ) {}

  @Get()
  async getAll() {
    return await this.redeterminacionesService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.redeterminacionesService.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.redeterminacionesService.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.redeterminacionesService.deleteMany(deleteManyDto)
  }
}
