import { Module } from '@nestjs/common'
import { CertificacionesService } from './certificaciones.service'
import { CertificacionesController } from './certificaciones.controller'
import { PrismaService } from '@/prisma.service'

@Module({
  providers: [CertificacionesService, PrismaService],
  controllers: [CertificacionesController],
})
export class CertificacionesModule {}
