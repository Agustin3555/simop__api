import { PrismaService } from '@/prisma.service'
import { Module } from '@nestjs/common'
import { TipoEstadoObraController } from './tipo-estado-obra.controller'
import { TipoEstadoObraService } from './tipo-estado-obra.service'

@Module({
  controllers: [TipoEstadoObraController],
  providers: [TipoEstadoObraService, PrismaService],
})
export class TipoEstadoObraModule {}
