import { Module } from '@nestjs/common'
import { SubSecretariasController } from './sub-secretarias.controller'
import { SubSecretariasService } from './sub-secretarias.service'
import { PrismaService } from '@/prisma.service'

@Module({
  controllers: [SubSecretariasController],
  providers: [SubSecretariasService, PrismaService],
})
export class SubSecretariasModule {}
