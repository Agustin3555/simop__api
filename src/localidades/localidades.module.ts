import { Module } from '@nestjs/common'
import { LocalidadesController } from './localidades.controller'
import { LocalidadesService } from './localidades.service'
import { PrismaService } from '@/prisma.service'

@Module({
  controllers: [LocalidadesController],
  providers: [LocalidadesService, PrismaService],
})
export class LocalidadesModule {}
