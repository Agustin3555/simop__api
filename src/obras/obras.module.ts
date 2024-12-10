import { Module } from '@nestjs/common'
import { ObrasController } from './obras.controller'
import { ObrasService } from './obras.service'
import { PrismaService } from '@/prisma.service'

@Module({
  controllers: [ObrasController],
  providers: [ObrasService, PrismaService],
})
export class ObrasModule {}
