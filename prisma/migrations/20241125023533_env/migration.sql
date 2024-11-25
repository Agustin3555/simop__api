-- DropIndex
DROP INDEX `Departamento_direccionId_fkey` ON `departamento`;

-- DropIndex
DROP INDEX `Direccion_subSecretariaId_fkey` ON `direccion`;

-- AddForeignKey
ALTER TABLE `Direccion` ADD CONSTRAINT `Direccion_subSecretariaId_fkey` FOREIGN KEY (`subSecretariaId`) REFERENCES `SubSecretaria`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Departamento` ADD CONSTRAINT `Departamento_direccionId_fkey` FOREIGN KEY (`direccionId`) REFERENCES `Direccion`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
