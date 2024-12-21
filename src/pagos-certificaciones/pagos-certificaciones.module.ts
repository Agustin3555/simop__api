import { Module } from '@nestjs/common'
import { PagosCertificacionesController } from './pagos-certificaciones.controller'
import { PagosCertificacionesService } from './pagos-certificaciones.service'
import { PrismaService } from '@/prisma.service'

@Module({
  controllers: [PagosCertificacionesController],
  providers: [PagosCertificacionesService, PrismaService],
})
export class PagosCertificacionesModule {}
