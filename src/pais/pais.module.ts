import { PrismaService } from '@/prisma.service'
import { Module } from '@nestjs/common'
import { PaisController } from './pais.controller'
import { PaisService } from './pais.service'

@Module({
  controllers: [PaisController],
  providers: [PaisService, PrismaService],
})
export class PaisModule {}
