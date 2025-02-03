import { Module } from '@nestjs/common'
import { TiposRecepcionesController } from './tipos-recepciones.controller'
import { TiposRecepcionesService } from './tipos-recepciones.service'
import { PrismaService } from '@/prisma.service'

@Module({
  controllers: [TiposRecepcionesController],
  providers: [TiposRecepcionesService, PrismaService],
})
export class TiposRecepcionesModule {}
