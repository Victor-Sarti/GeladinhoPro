-- CreateTable
CREATE TABLE "cadastro" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "geladinho" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sabor" TEXT NOT NULL,
    "valor" DECIMAL NOT NULL,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "valor" DECIMAL NOT NULL,
    "idGeladinho" INTEGER NOT NULL,
    CONSTRAINT "produto_idGeladinho_fkey" FOREIGN KEY ("idGeladinho") REFERENCES "geladinho" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
