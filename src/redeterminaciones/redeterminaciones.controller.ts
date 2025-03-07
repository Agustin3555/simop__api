import { RedeterminacionesService } from './redeterminaciones.service'
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

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

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.redeterminacionesService.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.redeterminacionesService.deleteMany(deleteManyDto)
  }
}
