import { PrismaService } from '@/prisma.service'
import { Module } from '@nestjs/common'
import { TipoTramiteObraController } from './tipo-tramite.controller'
import { TipoTramiteObraService } from './tipo-tramite.service'

@Module({
  controllers: [TipoTramiteObraController],
  providers: [TipoTramiteObraService, PrismaService],
})
export class TipoTramiteObraModule {}
