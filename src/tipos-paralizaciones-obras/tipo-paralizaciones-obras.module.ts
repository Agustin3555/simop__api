import { PrismaService } from '@/prisma.service'
import { Module } from '@nestjs/common'
import { TipoParalizacionesObrasController } from './tipo-paralizaciones-obras.controller'
import { TipoParalizacionesObrasService } from './tipo-paralizaciones-obras.service'

@Module({
  controllers: [TipoParalizacionesObrasController],
  providers: [TipoParalizacionesObrasService, PrismaService],
})
export class TipoParalizacionesObrasModule {}
