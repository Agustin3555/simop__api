import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import envConfig from './config/envConfig'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { NullToUndefinedInterceptor } from './common/interceptors'
import { SubSecretariasModule } from './sub-secretarias/sub-secretarias.module'
import { DireccionesModule } from './direcciones/direcciones.module'
import { DepartamentosModule } from './departamentos/departamentos.module'
import { PaisModule } from './pais/pais.module'
import { ProvinciasModule } from './provincias/provincias.module'
import { TipoEstadosObrasModule } from './tipo-estados-obras/tipo-estados-obras.module'
import { TipoFinanciamientosObrasModule } from './tipo-financiamientos-obras/tipo-financiamientos-obras.module'
import { TipoModificacionesObrasModule } from './tipo-modificaciones-obras/tipo-modificaciones-obras.module'
import { TipoParalizacionesObrasModule } from './tipo-paralizaciones-obras/tipo-paralizaciones-obras.module'
import { TipoRepresentantesObrasModule } from './tipo-representantes-empresas-obras/tipo-representantes-empresas-obras.module'
import { TipoTramitesObrasModule } from './tipo-tramites/tipo-tramites.module'
import { TiposProfesionesModule } from './tipos-profesiones/tipos-profesiones.module'
import { TipoTematicasObrasModule } from './tipo-tematicas-obras/tipo-tematicas-obras.module'
import { TiposInspectoresModule } from './tipos-inspectores/tipos-inspectores.module'
import { InspectoresModule } from './inspectores/inspectores.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [envConfig] }),
    SubSecretariasModule,
    DireccionesModule,
    DepartamentosModule,
    PaisModule,
    ProvinciasModule,
    TipoEstadosObrasModule,
    TipoFinanciamientosObrasModule,
    TipoModificacionesObrasModule,
    TipoParalizacionesObrasModule,
    TipoRepresentantesObrasModule,
    TipoTramitesObrasModule,
    TiposProfesionesModule,
    TipoTematicasObrasModule,
    TiposInspectoresModule,
    InspectoresModule,
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
