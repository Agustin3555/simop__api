import { PrismaService } from '@/prisma.service'
import { Module } from '@nestjs/common'
import { TipoProfesionObraController } from './tipo-profesion.controller'
import { TipoProfesionObraService } from './tipo-profesion.service'

@Module({
  controllers: [TipoProfesionObraController],
  providers: [TipoProfesionObraService, PrismaService],
})
export class TipoProfesionObraModule {}
