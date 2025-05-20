import { Controller, Param, Put } from '@nestjs/common'
import { ObrasService } from './obras.service'
import { Get, Post, Body } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'
import { FojasMedicionesService } from '@/fojas-mediciones/fojas-mediciones.service'
import { RedeterminacionesService } from '@/redeterminaciones/redeterminaciones.service'
import { AmpliacionesService } from '@/ampliaciones/ampliaciones.service'
import { ModificacionesService } from '@/modificaciones/modificaciones.service'
import { ParalizacionesService } from '@/paralizaciones/paralizaciones.service'
import { RescisionesService } from '@/rescisiones/rescisiones.service'
import { RecepcionesService } from '@/recepciones/recepciones.service'

@Controller('obras')
export class ObrasController {
  constructor(
    private readonly obrasService: ObrasService,

    private readonly fojasMedicionService: FojasMedicionesService,
    private readonly redeterminacionesService: RedeterminacionesService,
    private readonly ampliacionesService: AmpliacionesService,
    private readonly modificacionesService: ModificacionesService,
    private readonly paralizacionesService: ParalizacionesService,
    private readonly rescisionesService: RescisionesService,
    private readonly recepcionesService: RecepcionesService,
  ) {}

  @Get()
  async getAll() {
    return await this.obrasService.getAll()
  }

  @Get('totales')
  async getAllTotales() {
    return await this.obrasService.getAllTotales()
  }

  @Get('refs')
  async getRefs() {
    return await this.obrasService.getRefs()
  }

  @Get(':id')
  async getOne(@Param() params: SearchByIdDto) {
    return await this.obrasService.getOne(params.id)
  }

  @Get(':id/detalle')
  async getOneDetalle(@Param() params: SearchByIdDto) {
    const obra = await this.obrasService.getOneDetalle(params.id)

    const filter = { obraId: params.id }

    const fojasMedicion = await this.fojasMedicionService.getAll(filter)
    const redeterminaciones = await this.redeterminacionesService.getAll(filter)
    const ampliaciones = await this.ampliacionesService.getAll(filter)
    const modificaciones = await this.modificacionesService.getAll(filter)
    const paralizaciones = await this.paralizacionesService.getAll(filter)
    const rescisiones = await this.rescisionesService.getAll(filter)
    const recepciones = await this.recepcionesService.getAll(filter)

    return {
      ...obra,
      fojasMedicion,
      redeterminaciones,
      ampliaciones,
      modificaciones,
      paralizaciones,
      rescisiones,
      recepciones,
    }
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.obrasService.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.obrasService.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.obrasService.deleteMany(deleteManyDto)
  }
}
