import { PrismaService } from '@/prisma.service'
import { Module } from '@nestjs/common'
import { TiposProfesionesController } from './tipos-profesiones.controller'
import { TiposProfesionesService } from './tipo-profesiones.service'

@Module({
  controllers: [TiposProfesionesController],
  providers: [TiposProfesionesService, PrismaService],
})
export class TiposProfesionesModule {}
