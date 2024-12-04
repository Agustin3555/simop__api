import { PrismaService } from '@/prisma.service'
import { Module } from '@nestjs/common'
import { TipoTematicaObraController } from './tipo-tematica-obra.controller'
import { TipoTematicaObraService } from './tipo-tematica-obra.service'

@Module({
  controllers: [TipoTematicaObraController],
  providers: [TipoTematicaObraService, PrismaService],
})
export class TipoTematicaObraModule {}
