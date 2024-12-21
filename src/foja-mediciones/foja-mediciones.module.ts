import { Module } from '@nestjs/common'
import { FojaMedicionesService } from './foja-mediciones.service'
import { FojaMedicionesController } from './foja-mediciones.controller'
import { PrismaService } from '@/prisma.service'

@Module({
  providers: [FojaMedicionesService, PrismaService],
  controllers: [FojaMedicionesController],
})
export class FojaMedicionesModule {}
