import { PrismaService } from '@/prisma.service'
import { Module } from '@nestjs/common'
import { TipoModificacionesObrasController } from './tipo-modificaciones-obras.controller'
import { TipoModificacionesObrasService } from './tipo-modificaciones-obras.service'

@Module({
  controllers: [TipoModificacionesObrasController],
  providers: [TipoModificacionesObrasService, PrismaService],
})
export class TipoModificacionesObrasModule {}
