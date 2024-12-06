import { PrismaService } from '@/prisma.service'
import { Module } from '@nestjs/common'
import { TipoProfesionObraController } from './tipo-profesiones.controller'
import { TipoProfesionesObrasService } from './tipo-profesiones.service'

@Module({
  controllers: [TipoProfesionObraController],
  providers: [TipoProfesionesObrasService, PrismaService],
})
export class TipoProfesionesObrasModule {}
