import { Module } from '@nestjs/common'
import { RepresentantesObrasController } from './representantes-obras.controller'
import { RepresentantesObrasService } from './representantes-obras.service'
import { PrismaService } from '@/prisma.service'

@Module({
  controllers: [RepresentantesObrasController],
  providers: [RepresentantesObrasService, PrismaService],
})
export class RepresentantesObrasModule {}
