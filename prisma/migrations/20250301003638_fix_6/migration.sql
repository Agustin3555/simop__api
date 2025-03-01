-- CreateTable
CREATE TABLE `SubSecretaria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SubSecretaria_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Direccion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `subSecretariaId` INTEGER NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Direccion_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Departamento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `direccionId` INTEGER NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Departamento_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pais` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Pais_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Provincia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `paisId` INTEGER NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Localidad` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `provinciaId` INTEGER NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoInspector` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `TipoInspector_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoProfesion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `TipoProfesion_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoRepresentante` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `TipoRepresentante_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoContratacionObra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `TipoContratacionObra_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoFinanciamientoObra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `TipoFinanciamientoObra_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoProgramaObra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `TipoProgramaObra_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoTematicaObra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `TipoTematicaObra_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoEstadoObra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `TipoEstadoObra_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoRedeterminacion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `TipoRedeterminacion_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoModificacion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `TipoModificacion_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoParalizacion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `TipoParalizacion_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoRescision` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `TipoRescision_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoRecepcion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `TipoRecepcion_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Inspector` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cuil` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Inspector_cuil_key`(`cuil`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RelInspectorTipoProfesion` (
    `inspectorId` INTEGER NOT NULL,
    `tipoProfesionId` INTEGER NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    PRIMARY KEY (`inspectorId`, `tipoProfesionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Representante` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cuil` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NULL,
    `direccion` VARCHAR(191) NULL,
    `numeroMatricula` VARCHAR(191) NULL,
    `paisId` INTEGER NULL,
    `provinciaId` INTEGER NULL,
    `localidadId` INTEGER NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Representante_cuil_key`(`cuil`),
    UNIQUE INDEX `Representante_numeroMatricula_key`(`numeroMatricula`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Empresa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cuit` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NULL,
    `numeroContacto` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `paisId` INTEGER NULL,
    `provinciaId` INTEGER NULL,
    `localidadId` INTEGER NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Empresa_cuit_key`(`cuit`),
    UNIQUE INDEX `Empresa_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RepresentanteEmpresa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vigencia` BOOLEAN NOT NULL DEFAULT true,
    `fecha` DATE NULL,
    `empresaId` INTEGER NULL,
    `representanteId` INTEGER NULL,
    `tipoRepresentanteId` INTEGER NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `RepresentanteEmpresa_empresaId_representanteId_tipoRepresent_key`(`empresaId`, `representanteId`, `tipoRepresentanteId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Obra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numero` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `numeroExpediente` VARCHAR(191) NULL,
    `numeroResolucion` VARCHAR(191) NULL,
    `anioResolucion` INTEGER NULL,
    `numeroContratacion` VARCHAR(191) NULL,
    `fechaContratacion` DATE NULL,
    `montoContratacion` DECIMAL(65, 30) NULL,
    `fechaInicio` DATE NULL,
    `fechaFin` DATE NULL,
    `plazoMeses` INTEGER NULL,
    `plazoDias` INTEGER NULL,
    `direccion` VARCHAR(191) NULL,
    `lugar` TEXT NULL,
    `nomenclaturaCatastral` VARCHAR(191) NULL,
    `observaciones` TEXT NULL,
    `obraNueva` BOOLEAN NOT NULL DEFAULT true,
    `porcentajeObraNueva` DOUBLE NULL,
    `metrosCuadradosObraNueva` INTEGER NULL,
    `metrosLinealesObraNueva` INTEGER NULL,
    `observacionesObraNueva` TEXT NULL,
    `obraRefaccionada` BOOLEAN NOT NULL DEFAULT false,
    `porcentajeObraRefaccionada` DOUBLE NULL,
    `metrosCuadradosObraRefaccionada` INTEGER NULL,
    `metrosLinealesObraRefaccionada` INTEGER NULL,
    `observacionesObraRefaccionada` TEXT NULL,
    `empresaId` INTEGER NULL,
    `tipoContratacionObraId` INTEGER NULL,
    `tipoFinanciamientoObraId` INTEGER NULL,
    `tipoProgramaObraId` INTEGER NULL,
    `tipoTematicaObraId` INTEGER NULL,
    `tipoEstadoObraId` INTEGER NULL,
    `localidadId` INTEGER NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Obra_numero_key`(`numero`),
    UNIQUE INDEX `Obra_nombre_key`(`nombre`),
    UNIQUE INDEX `Obra_numeroExpediente_key`(`numeroExpediente`),
    UNIQUE INDEX `Obra_numeroResolucion_key`(`numeroResolucion`),
    UNIQUE INDEX `Obra_numeroContratacion_key`(`numeroContratacion`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InspectorObra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vigencia` BOOLEAN NOT NULL DEFAULT true,
    `fecha` DATE NULL,
    `obraId` INTEGER NULL,
    `inspectorId` INTEGER NULL,
    `tipoInspectorId` INTEGER NULL,
    `tipoProfesionId` INTEGER NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `InspectorObra_obraId_inspectorId_tipoInspectorId_tipoProfesi_key`(`obraId`, `inspectorId`, `tipoInspectorId`, `tipoProfesionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RepresentanteObra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vigencia` BOOLEAN NOT NULL DEFAULT true,
    `fecha` DATE NULL,
    `obraId` INTEGER NULL,
    `representanteId` INTEGER NULL,
    `tipoRepresentanteId` INTEGER NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `RepresentanteObra_obraId_representanteId_tipoRepresentanteId_key`(`obraId`, `representanteId`, `tipoRepresentanteId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FojaMedicion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numero` INTEGER NOT NULL,
    `numeroExpediente` VARCHAR(191) NOT NULL,
    `avance` DOUBLE NULL,
    `fecha` DATE NULL,
    `observaciones` TEXT NULL,
    `obraId` INTEGER NULL,
    `inspectorId` INTEGER NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `FojaMedicion_numeroExpediente_key`(`numeroExpediente`),
    UNIQUE INDEX `FojaMedicion_obraId_numero_key`(`obraId`, `numero`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Certificacion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numeroExpediente` VARCHAR(191) NOT NULL,
    `monto` DECIMAL(65, 30) NULL,
    `fecha` DATE NULL,
    `observaciones` TEXT NULL,
    `fojaMedicionId` INTEGER NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Certificacion_numeroExpediente_key`(`numeroExpediente`),
    UNIQUE INDEX `Certificacion_fojaMedicionId_key`(`fojaMedicionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PagoCertificacion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numero` INTEGER NOT NULL,
    `ordenPago` VARCHAR(191) NULL,
    `monto` DECIMAL(65, 30) NULL,
    `fecha` DATE NULL,
    `observaciones` TEXT NULL,
    `certificacionId` INTEGER NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `PagoCertificacion_ordenPago_key`(`ordenPago`),
    UNIQUE INDEX `PagoCertificacion_certificacionId_numero_key`(`certificacionId`, `numero`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Redeterminacion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numeroExpediente` VARCHAR(191) NOT NULL,
    `numeroResolucion` VARCHAR(191) NULL,
    `numeroExpedienteSolicitud` VARCHAR(191) NULL,
    `monto` DECIMAL(65, 30) NULL,
    `nuevoMontoObra` DECIMAL(65, 30) NULL,
    `fecha` DATE NULL,
    `observaciones` TEXT NULL,
    `obraId` INTEGER NULL,
    `tipoRedeterminacionId` INTEGER NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Redeterminacion_numeroExpediente_key`(`numeroExpediente`),
    UNIQUE INDEX `Redeterminacion_numeroResolucion_key`(`numeroResolucion`),
    UNIQUE INDEX `Redeterminacion_numeroExpedienteSolicitud_key`(`numeroExpedienteSolicitud`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ampliacion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numero` INTEGER NOT NULL,
    `numeroResolucion` VARCHAR(191) NULL,
    `numeroExpedienteSolicitud` VARCHAR(191) NULL,
    `plazoMesesSolicitado` INTEGER NULL,
    `plazoMesesOtorgado` INTEGER NULL,
    `nuevaFechaFinObra` DATE NULL,
    `fecha` DATE NULL,
    `observaciones` TEXT NULL,
    `obraId` INTEGER NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Ampliacion_numeroResolucion_key`(`numeroResolucion`),
    UNIQUE INDEX `Ampliacion_numeroExpedienteSolicitud_key`(`numeroExpedienteSolicitud`),
    UNIQUE INDEX `Ampliacion_obraId_numero_key`(`obraId`, `numero`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Modificacion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numeroExpediente` VARCHAR(191) NOT NULL,
    `numeroResolucion` VARCHAR(191) NULL,
    `monto` DECIMAL(65, 30) NULL,
    `nuevoMontoObra` DECIMAL(65, 30) NULL,
    `fecha` DATE NULL,
    `observaciones` TEXT NULL,
    `obraId` INTEGER NULL,
    `tipoModificacionId` INTEGER NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Modificacion_numeroExpediente_key`(`numeroExpediente`),
    UNIQUE INDEX `Modificacion_numeroResolucion_key`(`numeroResolucion`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Paralizacion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numero` INTEGER NOT NULL,
    `numeroExpediente` VARCHAR(191) NOT NULL,
    `fechaReinicio` DATE NULL,
    `nuevaFechaFinObra` DATE NULL,
    `fecha` DATE NULL,
    `observaciones` TEXT NULL,
    `obraId` INTEGER NULL,
    `tipoParalizacionId` INTEGER NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Paralizacion_numeroExpediente_key`(`numeroExpediente`),
    UNIQUE INDEX `Paralizacion_obraId_numero_key`(`obraId`, `numero`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rescision` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numeroExpediente` VARCHAR(191) NOT NULL,
    `numeroResolucion` VARCHAR(191) NULL,
    `fecha` DATE NULL,
    `observaciones` TEXT NULL,
    `obraId` INTEGER NULL,
    `tipoRescisionId` INTEGER NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Rescision_numeroExpediente_key`(`numeroExpediente`),
    UNIQUE INDEX `Rescision_numeroResolucion_key`(`numeroResolucion`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Recepcion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numeroActa` INTEGER NOT NULL,
    `fecha` DATE NULL,
    `observaciones` TEXT NULL,
    `obraId` INTEGER NULL,
    `tipoRecepcionId` INTEGER NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Recepcion_numeroActa_key`(`numeroActa`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Direccion` ADD CONSTRAINT `Direccion_subSecretariaId_fkey` FOREIGN KEY (`subSecretariaId`) REFERENCES `SubSecretaria`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Departamento` ADD CONSTRAINT `Departamento_direccionId_fkey` FOREIGN KEY (`direccionId`) REFERENCES `Direccion`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Provincia` ADD CONSTRAINT `Provincia_paisId_fkey` FOREIGN KEY (`paisId`) REFERENCES `Pais`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Localidad` ADD CONSTRAINT `Localidad_provinciaId_fkey` FOREIGN KEY (`provinciaId`) REFERENCES `Provincia`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RelInspectorTipoProfesion` ADD CONSTRAINT `RelInspectorTipoProfesion_inspectorId_fkey` FOREIGN KEY (`inspectorId`) REFERENCES `Inspector`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RelInspectorTipoProfesion` ADD CONSTRAINT `RelInspectorTipoProfesion_tipoProfesionId_fkey` FOREIGN KEY (`tipoProfesionId`) REFERENCES `TipoProfesion`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Representante` ADD CONSTRAINT `Representante_paisId_fkey` FOREIGN KEY (`paisId`) REFERENCES `Pais`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Representante` ADD CONSTRAINT `Representante_provinciaId_fkey` FOREIGN KEY (`provinciaId`) REFERENCES `Provincia`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Representante` ADD CONSTRAINT `Representante_localidadId_fkey` FOREIGN KEY (`localidadId`) REFERENCES `Localidad`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Empresa` ADD CONSTRAINT `Empresa_paisId_fkey` FOREIGN KEY (`paisId`) REFERENCES `Pais`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Empresa` ADD CONSTRAINT `Empresa_provinciaId_fkey` FOREIGN KEY (`provinciaId`) REFERENCES `Provincia`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Empresa` ADD CONSTRAINT `Empresa_localidadId_fkey` FOREIGN KEY (`localidadId`) REFERENCES `Localidad`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RepresentanteEmpresa` ADD CONSTRAINT `RepresentanteEmpresa_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RepresentanteEmpresa` ADD CONSTRAINT `RepresentanteEmpresa_representanteId_fkey` FOREIGN KEY (`representanteId`) REFERENCES `Representante`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RepresentanteEmpresa` ADD CONSTRAINT `RepresentanteEmpresa_tipoRepresentanteId_fkey` FOREIGN KEY (`tipoRepresentanteId`) REFERENCES `TipoRepresentante`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Obra` ADD CONSTRAINT `Obra_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Obra` ADD CONSTRAINT `Obra_tipoContratacionObraId_fkey` FOREIGN KEY (`tipoContratacionObraId`) REFERENCES `TipoContratacionObra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Obra` ADD CONSTRAINT `Obra_tipoFinanciamientoObraId_fkey` FOREIGN KEY (`tipoFinanciamientoObraId`) REFERENCES `TipoFinanciamientoObra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Obra` ADD CONSTRAINT `Obra_tipoProgramaObraId_fkey` FOREIGN KEY (`tipoProgramaObraId`) REFERENCES `TipoProgramaObra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Obra` ADD CONSTRAINT `Obra_tipoTematicaObraId_fkey` FOREIGN KEY (`tipoTematicaObraId`) REFERENCES `TipoTematicaObra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Obra` ADD CONSTRAINT `Obra_tipoEstadoObraId_fkey` FOREIGN KEY (`tipoEstadoObraId`) REFERENCES `TipoEstadoObra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Obra` ADD CONSTRAINT `Obra_localidadId_fkey` FOREIGN KEY (`localidadId`) REFERENCES `Localidad`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InspectorObra` ADD CONSTRAINT `InspectorObra_obraId_fkey` FOREIGN KEY (`obraId`) REFERENCES `Obra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InspectorObra` ADD CONSTRAINT `InspectorObra_inspectorId_fkey` FOREIGN KEY (`inspectorId`) REFERENCES `Inspector`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InspectorObra` ADD CONSTRAINT `InspectorObra_tipoInspectorId_fkey` FOREIGN KEY (`tipoInspectorId`) REFERENCES `TipoInspector`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InspectorObra` ADD CONSTRAINT `InspectorObra_tipoProfesionId_fkey` FOREIGN KEY (`tipoProfesionId`) REFERENCES `TipoProfesion`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RepresentanteObra` ADD CONSTRAINT `RepresentanteObra_obraId_fkey` FOREIGN KEY (`obraId`) REFERENCES `Obra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RepresentanteObra` ADD CONSTRAINT `RepresentanteObra_representanteId_fkey` FOREIGN KEY (`representanteId`) REFERENCES `Representante`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RepresentanteObra` ADD CONSTRAINT `RepresentanteObra_tipoRepresentanteId_fkey` FOREIGN KEY (`tipoRepresentanteId`) REFERENCES `TipoRepresentante`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FojaMedicion` ADD CONSTRAINT `FojaMedicion_obraId_fkey` FOREIGN KEY (`obraId`) REFERENCES `Obra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FojaMedicion` ADD CONSTRAINT `FojaMedicion_inspectorId_fkey` FOREIGN KEY (`inspectorId`) REFERENCES `Inspector`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Certificacion` ADD CONSTRAINT `Certificacion_fojaMedicionId_fkey` FOREIGN KEY (`fojaMedicionId`) REFERENCES `FojaMedicion`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PagoCertificacion` ADD CONSTRAINT `PagoCertificacion_certificacionId_fkey` FOREIGN KEY (`certificacionId`) REFERENCES `Certificacion`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Redeterminacion` ADD CONSTRAINT `Redeterminacion_obraId_fkey` FOREIGN KEY (`obraId`) REFERENCES `Obra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Redeterminacion` ADD CONSTRAINT `Redeterminacion_tipoRedeterminacionId_fkey` FOREIGN KEY (`tipoRedeterminacionId`) REFERENCES `TipoRedeterminacion`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ampliacion` ADD CONSTRAINT `Ampliacion_obraId_fkey` FOREIGN KEY (`obraId`) REFERENCES `Obra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Modificacion` ADD CONSTRAINT `Modificacion_obraId_fkey` FOREIGN KEY (`obraId`) REFERENCES `Obra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Modificacion` ADD CONSTRAINT `Modificacion_tipoModificacionId_fkey` FOREIGN KEY (`tipoModificacionId`) REFERENCES `TipoModificacion`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Paralizacion` ADD CONSTRAINT `Paralizacion_obraId_fkey` FOREIGN KEY (`obraId`) REFERENCES `Obra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Paralizacion` ADD CONSTRAINT `Paralizacion_tipoParalizacionId_fkey` FOREIGN KEY (`tipoParalizacionId`) REFERENCES `TipoParalizacion`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rescision` ADD CONSTRAINT `Rescision_obraId_fkey` FOREIGN KEY (`obraId`) REFERENCES `Obra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rescision` ADD CONSTRAINT `Rescision_tipoRescisionId_fkey` FOREIGN KEY (`tipoRescisionId`) REFERENCES `TipoRescision`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Recepcion` ADD CONSTRAINT `Recepcion_obraId_fkey` FOREIGN KEY (`obraId`) REFERENCES `Obra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Recepcion` ADD CONSTRAINT `Recepcion_tipoRecepcionId_fkey` FOREIGN KEY (`tipoRecepcionId`) REFERENCES `TipoRecepcion`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
