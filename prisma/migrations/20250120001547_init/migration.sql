-- CreateTable
CREATE TABLE `SubSecretaria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Direccion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `subSecretariaId` INTEGER NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Departamento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `direccionId` INTEGER NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

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
    `paisId` INTEGER NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Localidad` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `provinciaId` INTEGER NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

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
CREATE TABLE `TipoTramite` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `TipoTramite_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Empresa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cuit` INTEGER NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NULL,
    `numeroContacto` INTEGER NULL,
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
CREATE TABLE `Representante` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cuil` INTEGER NULL,
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
CREATE TABLE `RepresentanteEmpresa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vigencia` BOOLEAN NOT NULL DEFAULT true,
    `empresaId` INTEGER NOT NULL,
    `representanteId` INTEGER NOT NULL,
    `tipoRepresentanteId` INTEGER NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `RepresentanteEmpresa_empresaId_representanteId_tipoRepresent_key`(`empresaId`, `representanteId`, `tipoRepresentanteId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Inspector` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cuil` INTEGER NULL,
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
CREATE TABLE `TipoInspector` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `TipoInspector_nombre_key`(`nombre`),
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
CREATE TABLE `Obra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numero` INTEGER NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `numeroExpediente` VARCHAR(191) NULL,
    `numeroResolucion` VARCHAR(191) NULL,
    `anioResolucion` INTEGER NULL,
    `numeroContratacion` INTEGER NULL,
    `anioContratacion` INTEGER NULL,
    `montoContratacion` DECIMAL(65, 30) NULL,
    `fechaInicio` DATE NULL,
    `fechaFin` DATE NULL,
    `plazoMeses` INTEGER NULL,
    `plazoDias` INTEGER NULL,
    `direccion` VARCHAR(191) NULL,
    `lugar` VARCHAR(191) NULL,
    `nomenclaturaCatastral` VARCHAR(191) NULL,
    `observaciones` TEXT NULL,
    `obraNueva` BOOLEAN NOT NULL,
    `porcentajeObraNueva` DOUBLE NULL,
    `metrosCuadradosObraNueva` INTEGER NULL,
    `metrosLinealesObraNueva` INTEGER NULL,
    `observacionesObraNueva` TEXT NULL,
    `obraRefaccionada` BOOLEAN NOT NULL,
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
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InspectorObra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `obraId` INTEGER NOT NULL,
    `inspectorId` INTEGER NOT NULL,
    `tipoInspectorId` INTEGER NOT NULL,
    `tipoProfesionId` INTEGER NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `InspectorObra_obraId_inspectorId_tipoInspectorId_tipoProfesi_key`(`obraId`, `inspectorId`, `tipoInspectorId`, `tipoProfesionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RepresentanteObra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vigencia` BOOLEAN NOT NULL DEFAULT true,
    `obraId` INTEGER NOT NULL,
    `representanteId` INTEGER NOT NULL,
    `tipoRepresentanteId` INTEGER NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `RepresentanteObra_obraId_representanteId_tipoRepresentanteId_key`(`obraId`, `representanteId`, `tipoRepresentanteId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FojaMedicion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numero` INTEGER NOT NULL,
    `numeroExpediente` VARCHAR(191) NULL,
    `avance` DOUBLE NULL,
    `fecha` DATE NULL,
    `observaciones` TEXT NULL,
    `obraId` INTEGER NOT NULL,
    `inspectorId` INTEGER NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `FojaMedicion_numeroExpediente_key`(`numeroExpediente`),
    UNIQUE INDEX `FojaMedicion_obraId_numero_key`(`obraId`, `numero`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Certificacion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ordenPago` INTEGER NOT NULL,
    `fecha` DATE NULL,
    `monto` DECIMAL(65, 30) NULL,
    `observaciones` TEXT NULL,
    `fojaMedicionId` INTEGER NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Certificacion_ordenPago_key`(`ordenPago`),
    UNIQUE INDEX `Certificacion_fojaMedicionId_key`(`fojaMedicionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PagoCertificacion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numero` INTEGER NOT NULL,
    `fecha` DATE NULL,
    `monto` DECIMAL(65, 30) NULL,
    `observaciones` TEXT NULL,
    `certificacionId` INTEGER NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Direccion` ADD CONSTRAINT `Direccion_subSecretariaId_fkey` FOREIGN KEY (`subSecretariaId`) REFERENCES `SubSecretaria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Departamento` ADD CONSTRAINT `Departamento_direccionId_fkey` FOREIGN KEY (`direccionId`) REFERENCES `Direccion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Provincia` ADD CONSTRAINT `Provincia_paisId_fkey` FOREIGN KEY (`paisId`) REFERENCES `Pais`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Localidad` ADD CONSTRAINT `Localidad_provinciaId_fkey` FOREIGN KEY (`provinciaId`) REFERENCES `Provincia`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Empresa` ADD CONSTRAINT `Empresa_paisId_fkey` FOREIGN KEY (`paisId`) REFERENCES `Pais`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Empresa` ADD CONSTRAINT `Empresa_provinciaId_fkey` FOREIGN KEY (`provinciaId`) REFERENCES `Provincia`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Empresa` ADD CONSTRAINT `Empresa_localidadId_fkey` FOREIGN KEY (`localidadId`) REFERENCES `Localidad`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Representante` ADD CONSTRAINT `Representante_paisId_fkey` FOREIGN KEY (`paisId`) REFERENCES `Pais`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Representante` ADD CONSTRAINT `Representante_provinciaId_fkey` FOREIGN KEY (`provinciaId`) REFERENCES `Provincia`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Representante` ADD CONSTRAINT `Representante_localidadId_fkey` FOREIGN KEY (`localidadId`) REFERENCES `Localidad`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RepresentanteEmpresa` ADD CONSTRAINT `RepresentanteEmpresa_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RepresentanteEmpresa` ADD CONSTRAINT `RepresentanteEmpresa_representanteId_fkey` FOREIGN KEY (`representanteId`) REFERENCES `Representante`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RepresentanteEmpresa` ADD CONSTRAINT `RepresentanteEmpresa_tipoRepresentanteId_fkey` FOREIGN KEY (`tipoRepresentanteId`) REFERENCES `TipoRepresentante`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RelInspectorTipoProfesion` ADD CONSTRAINT `RelInspectorTipoProfesion_inspectorId_fkey` FOREIGN KEY (`inspectorId`) REFERENCES `Inspector`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RelInspectorTipoProfesion` ADD CONSTRAINT `RelInspectorTipoProfesion_tipoProfesionId_fkey` FOREIGN KEY (`tipoProfesionId`) REFERENCES `TipoProfesion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE `InspectorObra` ADD CONSTRAINT `InspectorObra_obraId_fkey` FOREIGN KEY (`obraId`) REFERENCES `Obra`(`numero`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InspectorObra` ADD CONSTRAINT `InspectorObra_inspectorId_fkey` FOREIGN KEY (`inspectorId`) REFERENCES `Inspector`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InspectorObra` ADD CONSTRAINT `InspectorObra_tipoInspectorId_fkey` FOREIGN KEY (`tipoInspectorId`) REFERENCES `TipoInspector`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InspectorObra` ADD CONSTRAINT `InspectorObra_tipoProfesionId_fkey` FOREIGN KEY (`tipoProfesionId`) REFERENCES `TipoProfesion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RepresentanteObra` ADD CONSTRAINT `RepresentanteObra_obraId_fkey` FOREIGN KEY (`obraId`) REFERENCES `Obra`(`numero`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RepresentanteObra` ADD CONSTRAINT `RepresentanteObra_representanteId_fkey` FOREIGN KEY (`representanteId`) REFERENCES `Representante`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RepresentanteObra` ADD CONSTRAINT `RepresentanteObra_tipoRepresentanteId_fkey` FOREIGN KEY (`tipoRepresentanteId`) REFERENCES `TipoRepresentante`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FojaMedicion` ADD CONSTRAINT `FojaMedicion_obraId_fkey` FOREIGN KEY (`obraId`) REFERENCES `Obra`(`numero`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FojaMedicion` ADD CONSTRAINT `FojaMedicion_inspectorId_fkey` FOREIGN KEY (`inspectorId`) REFERENCES `Inspector`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Certificacion` ADD CONSTRAINT `Certificacion_fojaMedicionId_fkey` FOREIGN KEY (`fojaMedicionId`) REFERENCES `FojaMedicion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PagoCertificacion` ADD CONSTRAINT `PagoCertificacion_certificacionId_fkey` FOREIGN KEY (`certificacionId`) REFERENCES `Certificacion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
