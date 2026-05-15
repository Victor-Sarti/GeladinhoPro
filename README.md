<div align="center">

# 🍧 GeladinhoPro

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white)](https://www.prisma.io/)

</div>

---

## 💡 Origem do Projeto

Este projeto nasceu de uma experiência real. Por **4 anos**, antes de conseguir meu primeiro emprego na área de tecnologia, eu e meu irmão vendemos geladinhos gourmet para sustentar nossos estudos. Controlar estoque no papel, perder vendas por falta de organização e não ter visibilidade dos resultados eram dores do dia a dia.

O **GeladinhoPro** é a solução que eu gostaria de ter tido naquela época — um sistema simples e completo para quem vive essa realidade.

---

## 🛠 Tecnologias

**Back-end:** Node.js · TypeScript · Express.js · Prisma ORM · dotenv

**Front-end:** React · Vite · JSX · PostCSS · ESLint

---

## 📁 Estrutura do Projeto

```
GeladinhoPro/
├── backend/
│   ├── generated/          # Prisma Client gerado
│   ├── prisma/             # Schema e migrações do banco
│   ├── src/               
│   ├── .env
│   └── tsconfig.json
│
└── frontend/
    ├── dist/               # Build de produção (Vite)
    └── src/
        ├── assets/
        ├── components/
        └── pages/
            ├── Cadastrar/
            ├── Estoque/
            ├── Login/
            ├── Menu/
            └── RelatorioPa/
```

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- npm
- Banco de dados compatível com Prisma (PostgreSQL, MySQL ou SQLite)

### 1. Clone o repositório

```bash
git clone https://github.com/Victor-Sarti/GeladinhoPro.git
cd GeladinhoPro
```

### 2. Back-end

```bash
cd backend
npm install
```

Crie o arquivo `.env` na pasta `backend`:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/geladinhopro"
PORT=3333
```

> 💡 Para desenvolvimento local, use SQLite: `DATABASE_URL="file:./dev.db"`

```bash
npx prisma migrate dev   # Cria as tabelas no banco
npx prisma generate      # Gera o Prisma Client
npm run dev              # Inicia o servidor
```

> Servidor disponível em `http://localhost:3333`

### 3. Front-end

Em um novo terminal:

```bash
cd frontend
npm install
npm run dev
```

> Aplicação disponível em `http://localhost:5173`

---

## ✨ Funcionalidades

- 🔐 Autenticação de usuários
- 📦 Controle de estoque
- 🛒 Cadastro de produtos
- 📊 Relatórios de vendas e produção
- 🧭 Navegação entre módulos

---

## ☁️ Possíveis Incrementações Futuras na AWS

| Serviço | Uso |
|---|---|
| **Amplify** | Hospedagem do front-end React com CI/CD automático |
| **Elastic Beanstalk / EC2** | Deploy do servidor Node.js escalável |
| **RDS** | Banco de dados PostgreSQL gerenciado com backups automáticos |
| **S3 + CloudFront** | Armazenamento de imagens e CDN global |
| **Secrets Manager** | Armazenamento seguro de variáveis de ambiente sensíveis |
| **CloudWatch** | Monitoramento de logs e alertas do servidor |
| **ECS + Fargate** | Containerização com Docker para deploy sem gerenciar servidores |

---

<div align="center">

Feito com ❤️ (e muita saudade dos geladinhos) por [Victor Sarti](https://github.com/Victor-Sarti)

</div>
