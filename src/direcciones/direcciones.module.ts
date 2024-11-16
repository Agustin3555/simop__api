import { Module } from '@nestjs/common'
import { DireccionesController } from './direcciones.controller'
import { DireccionesService } from './direcciones.service'
import { PrismaService } from '@/prisma.service'

@Module({
  controllers: [DireccionesController],
  providers: [DireccionesService, PrismaService],
})
export class DireccionesModule {}
