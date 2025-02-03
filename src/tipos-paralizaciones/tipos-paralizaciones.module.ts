import { Module } from '@nestjs/common'
import { TiposParalizacionesController } from './tipos-paralizaciones.controller'
import { TiposParalizacionesService } from './tipos-paralizaciones.service'
import { PrismaService } from '@/prisma.service'

@Module({
  controllers: [TiposParalizacionesController],
  providers: [TiposParalizacionesService, PrismaService],
})
export class TiposParalizacionesModule {}
