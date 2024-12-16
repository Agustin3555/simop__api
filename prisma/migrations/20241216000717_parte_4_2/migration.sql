/*
  Warnings:

  - The primary key for the `obra` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `obra` table. All the data in the column will be lost.
  - You are about to drop the column `paisId` on the `obra` table. All the data in the column will be lost.
  - You are about to drop the column `provinciaId` on the `obra` table. All the data in the column will be lost.
  - You are about to drop the column `tipoEstadoId` on the `obra` table. All the data in the column will be lost.
  - You are about to drop the column `tipoFinanciamientoId` on the `obra` table. All the data in the column will be lost.
  - You are about to drop the column `tipoTematicaId` on the `obra` table. All the data in the column will be lost.
  - You are about to drop the column `obraId` on the `relobrainspector` table. All the data in the column will be lost.
  - You are about to drop the column `obraId` on the `relobrarepresentante` table. All the data in the column will be lost.
  - You are about to drop the `tipoestado` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tipofinanciamiento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tipomodificacionobra` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tipoparalizacionobra` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tipotematica` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[nombre]` on the table `Empresa` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `Obra` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[obraNumero,inspectorId]` on the table `RelObraInspector` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[obraNumero,representanteId]` on the table `RelObraRepresentante` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `numero` to the `Obra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `obraNueva` to the `Obra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `obraRefaccionada` to the `Obra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `obraNumero` to the `RelObraInspector` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoProfesionId` to the `RelObraInspector` table without a default value. This is not possible if the table is not empty.
  - Made the column `tipoInspectorId` on table `relobrainspector` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `obraNumero` to the `RelObraRepresentante` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoRepresentanteId` to the `RelObraRepresentante` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Departamento_direccionId_fkey` ON `departamento`;

-- DropIndex
DROP INDEX `Direccion_subSecretariaId_fkey` ON `direccion`;

-- DropIndex
DROP INDEX `Empresa_localidadId_fkey` ON `empresa`;

-- DropIndex
DROP INDEX `Empresa_paisId_fkey` ON `empresa`;

-- DropIndex
DROP INDEX `Empresa_provinciaId_fkey` ON `empresa`;

-- DropIndex
DROP INDEX `Localidad_provinciaId_fkey` ON `localidad`;

-- DropIndex
DROP INDEX `Obra_empresaId_fkey` ON `obra`;

-- DropIndex
DROP INDEX `Obra_localidadId_fkey` ON `obra`;

-- DropIndex
DROP INDEX `Obra_paisId_fkey` ON `obra`;

-- DropIndex
DROP INDEX `Obra_provinciaId_fkey` ON `obra`;

-- DropIndex
DROP INDEX `Obra_tipoEstadoId_fkey` ON `obra`;

-- DropIndex
DROP INDEX `Obra_tipoFinanciamientoId_fkey` ON `obra`;

-- DropIndex
DROP INDEX `Obra_tipoTematicaId_fkey` ON `obra`;

-- DropIndex
DROP INDEX `Provincia_paisId_fkey` ON `provincia`;

-- DropIndex
DROP INDEX `RelEmpresaRepresentante_representanteId_fkey` ON `relempresarepresentante`;

-- DropIndex
DROP INDEX `RelInspectorTipoProfesion_tipoProfesionId_fkey` ON `relinspectortipoprofesion`;

-- DropIndex
DROP INDEX `RelObraInspector_inspectorId_fkey` ON `relobrainspector`;

-- DropIndex
DROP INDEX `RelObraInspector_obraId_inspectorId_key` ON `relobrainspector`;

-- DropIndex
DROP INDEX `RelObraInspector_tipoInspectorId_fkey` ON `relobrainspector`;

-- DropIndex
DROP INDEX `RelObraRepresentante_obraId_representanteId_key` ON `relobrarepresentante`;

-- DropIndex
DROP INDEX `RelObraRepresentante_representanteId_fkey` ON `relobrarepresentante`;

-- DropIndex
DROP INDEX `Representante_localidadId_fkey` ON `representante`;

-- DropIndex
DROP INDEX `Representante_paisId_fkey` ON `representante`;

-- DropIndex
DROP INDEX `Representante_provinciaId_fkey` ON `representante`;

-- DropIndex
DROP INDEX `Representante_tipoRepresentanteId_fkey` ON `representante`;

-- AlterTable
ALTER TABLE `obra` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `paisId`,
    DROP COLUMN `provinciaId`,
    DROP COLUMN `tipoEstadoId`,
    DROP COLUMN `tipoFinanciamientoId`,
    DROP COLUMN `tipoTematicaId`,
    ADD COLUMN `direccion` VARCHAR(191) NULL,
    ADD COLUMN `lugar` VARCHAR(191) NULL,
    ADD COLUMN `metrosCuadradosObraNueva` INTEGER NULL,
    ADD COLUMN `metrosCuadradosObraRefaccionada` INTEGER NULL,
    ADD COLUMN `metrosLinealesObraNueva` INTEGER NULL,
    ADD COLUMN `metrosLinealesObraRefaccionada` INTEGER NULL,
    ADD COLUMN `numero` INTEGER NOT NULL,
    ADD COLUMN `obraNueva` BOOLEAN NOT NULL,
    ADD COLUMN `obraRefaccionada` BOOLEAN NOT NULL,
    ADD COLUMN `observacionesObraNueva` TEXT NULL,
    ADD COLUMN `observacionesObraRefaccionada` TEXT NULL,
    ADD COLUMN `porcentajeObraNueva` INTEGER NULL,
    ADD COLUMN `porcentajeObraRefaccionada` INTEGER NULL,
    ADD COLUMN `tipoContratacionObraId` INTEGER NULL,
    ADD COLUMN `tipoEstadoObraId` INTEGER NULL,
    ADD COLUMN `tipoFinanciamientoObraId` INTEGER NULL,
    ADD COLUMN `tipoProgramaObraId` INTEGER NULL,
    ADD COLUMN `tipoTematicaObraId` INTEGER NULL,
    MODIFY `numeroResolucion` INTEGER NULL,
    MODIFY `anioResolucion` INTEGER NULL,
    MODIFY `numeroContratacion` INTEGER NULL,
    MODIFY `anioContratacion` INTEGER NULL,
    MODIFY `montoContratacion` INTEGER NULL,
    MODIFY `numeroExpediente` INTEGER NULL,
    MODIFY `nomenclaturaCatastral` VARCHAR(191) NULL,
    MODIFY `plazoMeses` INTEGER NULL,
    MODIFY `plazoDias` INTEGER NULL,
    ADD PRIMARY KEY (`numero`);

-- AlterTable
ALTER TABLE `relobrainspector` DROP COLUMN `obraId`,
    ADD COLUMN `obraNumero` INTEGER NOT NULL,
    ADD COLUMN `tipoProfesionId` INTEGER NOT NULL,
    MODIFY `tipoInspectorId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `relobrarepresentante` DROP COLUMN `obraId`,
    ADD COLUMN `obraNumero` INTEGER NOT NULL,
    ADD COLUMN `tipoRepresentanteId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `tipoestado`;

-- DropTable
DROP TABLE `tipofinanciamiento`;

-- DropTable
DROP TABLE `tipomodificacionobra`;

-- DropTable
DROP TABLE `tipoparalizacionobra`;

-- DropTable
DROP TABLE `tipotematica`;

-- CreateTable
CREATE TABLE `TipoModificacion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoParalizacion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoContratacionObra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoFinanciamientoObra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoTematicaObra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoEstadoObra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Empresa_nombre_key` ON `Empresa`(`nombre`);

-- CreateIndex
CREATE UNIQUE INDEX `Obra_nombre_key` ON `Obra`(`nombre`);

-- CreateIndex
CREATE UNIQUE INDEX `RelObraInspector_obraNumero_inspectorId_key` ON `RelObraInspector`(`obraNumero`, `inspectorId`);

-- CreateIndex
CREATE UNIQUE INDEX `RelObraRepresentante_obraNumero_representanteId_key` ON `RelObraRepresentante`(`obraNumero`, `representanteId`);

-- AddForeignKey
ALTER TABLE `Direccion` ADD CONSTRAINT `Direccion_subSecretariaId_fkey` FOREIGN KEY (`subSecretariaId`) REFERENCES `SubSecretaria`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Departamento` ADD CONSTRAINT `Departamento_direccionId_fkey` FOREIGN KEY (`direccionId`) REFERENCES `Direccion`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Provincia` ADD CONSTRAINT `Provincia_paisId_fkey` FOREIGN KEY (`paisId`) REFERENCES `Pais`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Localidad` ADD CONSTRAINT `Localidad_provinciaId_fkey` FOREIGN KEY (`provinciaId`) REFERENCES `Provincia`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

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
ALTER TABLE `Representante` ADD CONSTRAINT `Representante_tipoRepresentanteId_fkey` FOREIGN KEY (`tipoRepresentanteId`) REFERENCES `TipoRepresentante`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RelEmpresaRepresentante` ADD CONSTRAINT `RelEmpresaRepresentante_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RelEmpresaRepresentante` ADD CONSTRAINT `RelEmpresaRepresentante_representanteId_fkey` FOREIGN KEY (`representanteId`) REFERENCES `Representante`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE `RelObraInspector` ADD CONSTRAINT `RelObraInspector_obraNumero_fkey` FOREIGN KEY (`obraNumero`) REFERENCES `Obra`(`numero`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RelObraInspector` ADD CONSTRAINT `RelObraInspector_inspectorId_fkey` FOREIGN KEY (`inspectorId`) REFERENCES `Inspector`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RelObraInspector` ADD CONSTRAINT `RelObraInspector_tipoInspectorId_fkey` FOREIGN KEY (`tipoInspectorId`) REFERENCES `TipoInspector`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RelObraInspector` ADD CONSTRAINT `RelObraInspector_tipoProfesionId_fkey` FOREIGN KEY (`tipoProfesionId`) REFERENCES `TipoProfesion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RelObraRepresentante` ADD CONSTRAINT `RelObraRepresentante_obraNumero_fkey` FOREIGN KEY (`obraNumero`) REFERENCES `Obra`(`numero`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RelObraRepresentante` ADD CONSTRAINT `RelObraRepresentante_representanteId_fkey` FOREIGN KEY (`representanteId`) REFERENCES `Representante`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RelObraRepresentante` ADD CONSTRAINT `RelObraRepresentante_tipoRepresentanteId_fkey` FOREIGN KEY (`tipoRepresentanteId`) REFERENCES `TipoRepresentante`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
