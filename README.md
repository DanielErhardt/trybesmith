# Trybesmith

<details>
<summary>:brazil: Versão em Português</summary>
Trybesmith é uma API simples para criar e gerenciar produtos, usuários e pedidos de uma loja de ferreiro com tema medieval.

## Objetivo

Colocar em prática conceitos como tipagem estática e tipagem forte, usando tipos primitivos, subtipos, type aliases e interfaces para implementar requisições HTTP a um banco de dados MySQL. A API foi construída usando o padrão Model-Service-Controller.

## Observações

Todos os arquivos fora do diretório /src foram criados e configurados pela Trybe.

## Conceitos, Ferramentas e Linguagens

- Tipagem estática e tipagem forte
- Tipos primitivos e subtipos
- Interfaces
- Type aliases
- Docker
- MySQL
- Node.js
- Express
- JSON Web Token
- Commits convencionais

## Executando a aplicação localmente

- Para instalar os containers docker:

```
docker-compose up -d
```

- Executar o terminal do container:

```
docker attach trybesmith
```

- Instalar as dependências, criar e popular o banco de dados:

```
npm install && npm run restore
```

- Inicializar a aplicação:

```
npm start
```

<br />

## Endpoints

### Login

| Requisição | URL                         |
| ---------- | --------------------------- |
| `POST`     | http://localhost:3000/login |

### Users

| Requisição | URL                         |
| ---------- | --------------------------- |
| `POST`     | http://localhost:3000/users |

### Products

| Requisição | URL                            |
| ---------- | ------------------------------ |
| `GET`      | http://localhost:3000/products |
| `POST`     | http://localhost:3000/products |

### Orders

| Requisição | URL                          |
| ---------- | ---------------------------- |
| `GET`      | http://localhost:3000/orders |
| `POST`     | http://localhost:3000/orders |

</details>

<details open>
<summary>:us: English Version</summary>
Trybesmith is a simple API for creating and managing products, users and orders of a blacksmith shop in a medieval setting.

## Objective

To practice concepts like static typing and strong typing, using primitive types and subtypes, type aliases and interfaces while implementing HTTP requests to a MySQL database. The API was built using the Model-Service-Controller standard.

## Observations

All files outside of /src directory were created and configured by Trybe.

## Concepts, Tools and Languages

- Static typing and strong typing
- Primitive types and subtypes
- Interfaces
- Type aliases
- Docker
- MySQL
- Node.js
- Express
- JSON Web Token
- Conventional commits

## Running the application locally

- Install the docker containers:

```
docker-compose up -d
```

- Open container terminal:

```
docker attach trybesmith
```

- Install dependencies, create and populate the database:

```
npm install && npm run restore
```

- Start the application:

```
npm start
```

<br />

## Endpoints

### Login

| Request | URL                         |
| ------- | --------------------------- |
| `POST`  | http://localhost:3000/login |

### Users

| Request | URL                         |
| ------- | --------------------------- |
| `POST`  | http://localhost:3000/users |

### Products

| Request | URL                            |
| ------- | ------------------------------ |
| `GET`   | http://localhost:3000/products |
| `POST`  | http://localhost:3000/products |

### Orders

| Request | URL                          |
| ------- | ---------------------------- |
| `GET`   | http://localhost:3000/orders |
| `POST`  | http://localhost:3000/orders |

</details>
