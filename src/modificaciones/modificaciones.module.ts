import { Module } from '@nestjs/common'
import { ModificacionesController } from './modificaciones.controller'
import { ModificacionesService } from './modificaciones.service'
import { PrismaService } from '@/prisma.service'
@Module({
  controllers: [ModificacionesController],
  providers: [ModificacionesService, PrismaService],
})
export class ModificacionesModule {}
