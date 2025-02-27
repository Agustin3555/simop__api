import { PrismaService } from '@/prisma.service'
import { Module } from '@nestjs/common'
import { TipoTematicasObrasController } from './tipo-tematicas-obras.controller'
import { TipoTematicasObrasService } from './tipo-tematicas-obras.service'

@Module({
  controllers: [TipoTematicasObrasController],
  providers: [TipoTematicasObrasService, PrismaService],
})
export class TiposTematicasObrasModule {}
