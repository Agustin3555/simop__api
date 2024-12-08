import { Module } from '@nestjs/common'
import { TiposProgramasObrasController } from './tipos-programas-obras.controller'
import { TiposProgramasObrasService } from './tipos-programas-obras.service'
import { PrismaService } from '@/prisma.service'
@Module({
  controllers: [TiposProgramasObrasController],
  providers: [TiposProgramasObrasService, PrismaService],
})
export class TiposProgramasObrasModule {}
