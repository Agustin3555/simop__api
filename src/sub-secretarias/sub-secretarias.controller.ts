import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { SubSecretariasService } from './sub-secretarias.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('sub-secretarias')
export class SubSecretariasController {
  constructor(private readonly subSecretariasService: SubSecretariasService) {}

  @Get()
  async getAll() {
    return await this.subSecretariasService.getAll()
  }

  @Get('refs')
  async getRefs() {
    return await this.subSecretariasService.getRefs()
  }

  @Get(':id')
  async getOne(@Param() params: SearchByIdDto) {
    return await this.subSecretariasService.getOne(params.id)
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.subSecretariasService.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.subSecretariasService.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.subSecretariasService.deleteMany(deleteManyDto)
  }
}
