import { Module } from '@nestjs/common'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import envConfig from './config/envConfig'
import { SubSecretariasModule } from './sub-secretarias/sub-secretarias.module'
import { DireccionesModule } from './direcciones/direcciones.module'
import { DepartamentosModule } from './departamentos/departamentos.module'
import { NullToUndefinedInterceptor } from './common/interceptors'
import { CatsModule } from './cats/cats.module'
import { PaisModule } from './pais/pais.module'
import { ProvinciaModule } from './provincia/provincia.module'
import { TipoEstadoObraModule } from './tipo-estado-obra/tipo-estado-obre.module'
import { TipoFinanciamientoObraModule } from './tipo-financiamiento-obra/tipo-financiamiento-obra.module'
import { TipoModificacionObraModule } from './tipo-modificacion-obra/dto/tipo-modificacion-obra.module'

import { TipoTramiteObraModule } from './tipo-tramite/tipo-tramite.module'
import { TipoRepresentanteObraModule } from './tipo-representante-empresa-obra/tipo-representante-empresa-obra.module'
import { TipoParalizacionObraModule } from './tipo-paralizacion-obra/tipo-paralizacion-obra.module'
import { TipoInspectorObraModule } from './tipo-inspector/tipo-inspector.module'
import { TipoProfesionObraModule } from './tipo-profesion/tipo-profesion.module'
import { TipoTematicaObraModule } from './tipo-tematica-obra/tipo-tematica-obra.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [envConfig] }),
    SubSecretariasModule,
    DireccionesModule,
    DepartamentosModule,
    CatsModule,
    PaisModule,
    ProvinciaModule,
    TipoEstadoObraModule,
    TipoFinanciamientoObraModule,
    TipoModificacionObraModule,
    TipoRepresentanteObraModule,
    TipoParalizacionObraModule,
    TipoTramiteObraModule,
    TipoInspectorObraModule,
    TipoProfesionObraModule,
    TipoTematicaObraModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: NullToUndefinedInterceptor,
    },
  ],
})
export class AppModule {}
