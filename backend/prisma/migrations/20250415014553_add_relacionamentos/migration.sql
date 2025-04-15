/*
  Warnings:

  - Added the required column `idGeladinho` to the `produto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `produto` ADD COLUMN `idGeladinho` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `produto` ADD CONSTRAINT `produto_idGeladinho_fkey` FOREIGN KEY (`idGeladinho`) REFERENCES `geladinho`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
