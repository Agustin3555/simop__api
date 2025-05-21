import { Module } from '@nestjs/common'
import { ParalizacionesController } from './paralizaciones.controller'
import { ParalizacionesService } from './paralizaciones.service'
import { PrismaService } from '@/prisma.service'

@Module({
  controllers: [ParalizacionesController],
  providers: [ParalizacionesService, PrismaService],
  exports: [ParalizacionesService],
})
export class ParalizacionesModule {}
