
# 🧮 Projeto CMV - Cálculo de Custo de Mercadoria Vendida

Este é um sistema backend para gerenciamento de produtos e cálculo de **CMV (Custo da Mercadoria Vendida)**, utilizando Node.js com TypeScript, PostgreSQL, Sequelize ORM e Docker.

## 🚀 Tecnologias Utilizadas

- Node.js
- TypeScript
- PostgreSQL
- Sequelize ORM
- Docker / Docker Compose
- Express
- Nodemon

---

## 🏗️ Estrutura do Projeto

```
src/
├── config/            # Configurações globais
├── controller/        # Controllers das rotas
├── database/          # Inicialização da conexão com o banco
├── migrations/        # Arquivos de migração do Sequelize
├── entities/          # Definição das entidades
├── models/            # Modelos Sequelize
├── router/            # Rotas da aplicação
├── utils/messagers/   # Mensagens de erro/sucesso
├── db.ts              # Configuração da conexão com Sequelize
├── testConnection.ts  # Teste de conexão com banco
└── server.ts          # Ponto de entrada da aplicação
```

---

## 📦 Como rodar o projeto

### Pré-requisitos

- **Docker e Docker Compose instalados**

> ✅ Para executar o projeto, basta ter o Docker instalado e executar o comando abaixo:

```bash
docker-compose up --build
```

> Isso já cria o banco de dados e roda as migrations automaticamente.

---

## 🛠️ Comandos úteis

```bash
# Criar uma nova migration
npx sequelize-cli migration:generate --name=nome-da-migration

# Rodar as migrations
npx sequelize-cli db:migrate

# Reverter a última migration
npx sequelize-cli db:migrate:undo
```

---

## 🧪 Testando Conexão com o Banco

Você pode testar a conexão executando o arquivo `testConnection.ts`:

```bash
npx ts-node src/testConnection.ts
```

---

## 📌 Funcionalidades (em desenvolvimento)

- [x] Cadastro de empresas
- [x] Cadastro de produtos
- [x] Cadastro de ingredientes
- [x] Relacionamento produto ↔ ingredientes
- [x] Cálculo automático de CMV
- [ ] Interface Web (futura)
- [ ] Autenticação de usuários

---

## 📡 Rotas da API

### 🏢 Empresas (Companies)

#### ➕ Criar uma nova empresa

**POST** `read/companies`

```json
{
  "company": "Pão e amore",
  "cnpj": "10101010",
  "email": "teste@teste.com",
  "password": "123456789"
}
```

---

#### 🔍 Buscar todas as empresas

**GET** `read/companiesAll`

---

#### 🔍 Buscar uma empresa por e-mail

**GET** `read/companies?email=teste@teste.com`

---

#### 🔄 Atualizar uma empresa

**PUT** `read/companies/:id`

```json
{
  "company": "Pão e Amore Atualizado",
  "cnpj": "10101010",
  "email": "novoemail@teste.com",
  "password": "novaSenha123"
}
```

---

### 🍞 Produtos (Products)

#### ➕ Criar um novo produto para uma empresa

**POST** `read/products/:account_id`

```json
{
  "name": "Pão tradicional",
  "sale_price": 15
}
```

---

#### 🔍 Listar todos os produtos de uma empresa

**GET** `read/products/:account_id`

---

> ⚠️ Observação: todas as rotas são públicas neste estágio inicial. Em futuras versões, será implementada autenticação para proteger os endpoints.

---

## 📂 Arquivos principais

- `Dockerfile` – Configuração do container Node
- `docker-compose.yml` – Orquestração dos containers
- `sequelize.config.js` – Configuração do Sequelize
- `tsconfig.json` – Configuração do TypeScript
- `.sequelizerc` – Caminhos padrão do Sequelize
- `package.json` – Dependências e scripts do projeto

---

## 📝 Licença

Este projeto está sob a licença MIT.

---

## 💬 Contato

Desenvolvido com 💻 por **Patrick**
```

