import { PrismaService } from '@/prisma.service'
import { Module } from '@nestjs/common'
import { TipoModificacionObraController } from './tipo-modificacion-obra.controller'
import { TipoModificacionObraService } from './tipo-modificacion-obra.service'

@Module({
  controllers: [TipoModificacionObraController],
  providers: [TipoModificacionObraService, PrismaService],
})
export class TipoModificacionObraModule {}
