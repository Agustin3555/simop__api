import { Module } from '@nestjs/common'
import { TiposModificacionesController } from './tipos-modificaciones.controller'
import { TiposModificacionesService } from './tipos-modificaciones.service'
import { PrismaService } from '@/prisma.service'

@Module({
  controllers: [TiposModificacionesController],
  providers: [TiposModificacionesService, PrismaService],
})
export class TiposModificacionesModule {}
