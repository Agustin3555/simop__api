import { Body, Controller, Get, Post } from '@nestjs/common'
import { SubSecretariasService } from './sub-secretarias.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('sub-secretarias')
export class SubSecretariasController {
  constructor(private readonly subSecretariasService: SubSecretariasService) {}

  @Get()
  async getAll() {
    return await this.subSecretariasService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.subSecretariasService.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.subSecretariasService.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.subSecretariasService.deleteMany(deleteManyDto)
  }
}
