import { Module } from '@nestjs/common'
import { TiposRedeterminacionesController } from './tipos-redeterminaciones.controller'
import { TiposRedeterminacionesService } from './tipos-redeterminaciones.service'
import { PrismaService } from '@/prisma.service'

@Module({
  controllers: [TiposRedeterminacionesController],
  providers: [TiposRedeterminacionesService, PrismaService],
})
export class TiposRedeterminacionesModule {}
