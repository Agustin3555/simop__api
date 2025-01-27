import { Body, Controller, Get, Post } from '@nestjs/common'
import { SubSecretariasService } from './sub-secretarias.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('sub-secretarias')
export class SubSecretariasController {
  constructor(private readonly subSecretariasService: SubSecretariasService) {}

  @Get()
  getAll() {
    return this.subSecretariasService.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.subSecretariasService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.subSecretariasService.create(createDto)
  }

  @Post('delete-many')
  deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return this.subSecretariasService.deleteMany(deleteManyDto)
  }
}
