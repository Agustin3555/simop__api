import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SubSecretariasModule } from './sub-secretarias/sub-secretarias.module'
import { DireccionesModule } from './direcciones/direcciones.module'
import { DepartamentosModule } from './departamentos/departamentos.module'

@Module({
  imports: [SubSecretariasModule, DireccionesModule, DepartamentosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
