import { Module } from '@nestjs/common'
import { RecepcionesController } from './recepciones.controller'
import { RecepcionesService } from './recepciones.service'
import { PrismaService } from '@/prisma.service'

@Module({
  controllers: [RecepcionesController],
  providers: [RecepcionesService, PrismaService],
})
export class RecepcionesModule {}
