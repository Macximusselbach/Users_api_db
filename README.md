# Users API

## Requisitos

- [Node.js](https://nodejs.org)
- [Postgres](https://www.postgresql.org/)

Projeto têm como objetivo aprender como realizar a conexão ao banco de dados e executar as seguintes operações:

- INSERT
- SELECT
- DELETE
- UPDATE

## Atividades

1. Criar rota para buscar todos os usuários do banco de dados
2. Criar rota para buscar o usuário pelo id
3. Criar rota para atualizar um usuário
4. Criar rota para deletar usuário
5. Adicionar tabela de endereços (addresses) com as colunas:

- id
- place
- district
- city
- state
- number
- cep

6. Adicionar coluna address_id como chave estrangeira na tabela de usuários
7. Atualizar a query para buscar os usuários para retornar os usuários com endereço

## Como iniciar a aplicação

1. Instalar as dependências

```
$ npm install
```

2. Executar os comandos SQL

```
CREATE DATABASE users_api_db;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(64) NOT NULL,
  last_name VARCHAR(64) NOT NULL,
  email VARCHAR(128) NOT NULL,
  birth_date DATE NOT NULL
);
```

3. Executar a aplicação

```
$ npm start
```
