import { Module } from '@nestjs/common'
import { FojasMedicionesService } from './fojas-mediciones.service'
import { FojasMedicionesController } from './fojas-mediciones.controller'
import { PrismaService } from '@/prisma.service'

@Module({
  providers: [FojasMedicionesService, PrismaService],
  controllers: [FojasMedicionesController],
})
export class FojasMedicionesModule {}
