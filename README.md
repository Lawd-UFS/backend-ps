# Plataforma do PS - Backend/API

- [Plataforma do PS - Backend/API](#plataforma-do-ps---backendapi)
  - [Introdução](#introdução)
  - [Requisitos](#requisitos)
  - [Instalação](#instalação)
  - [Estrutura](#estrutura)
  - [Desenvolvimento](#desenvolvimento)
  - [Contribuição](#contribuição)

## Introdução

Este projeto TypeScript serve como backend/API para a plataforma do processo seletivo. Ele é responsável por gerenciar a lógica de negócios, armazenamento de dados, autenticação de usuários, e fornecer uma interface de programação de aplicações (API) para o frontend interagir.

## Requisitos

Para o desenvolvimento e execução do backend, são necessárias as seguintes tecnologias:

- Node.js
- TypeScript
- Express
- MongoDB
- Mongoose

## Instalação

Para instalar as dependências necessárias, execute o seguinte comando no terminal:

```bash
npm install
```

## Estrutura

A estrutura de diretórios do projeto é organizada da seguinte forma:

- `/src`: Contém todo o código fonte do projeto.
  - `/controllers`: Lógica de controle das rotas.
  - `/middlewares`: Funções intermediárias que executam operações como autenticações e tratamento de erros.
  - `/models`: Modelos de dados, geralmente correspondendo às tabelas do banco de dados.
  - `/routes`: Definições de rotas da aplicação.
  - `/services`: Lógica de negócios e serviços de aplicação.
  - `/utils`: Funções utilitárias.
  - `server.ts`: Arquivo principal que configura e inicia o servidor.
- `/config`: Configurações do projeto, como conexão com o banco de dados e variáveis de ambiente.
- `/tests`: Contém testes unitários e de integração.

## Desenvolvimento

O desenvolvimento da aplicação deve ser feito pensando em uma Arquitetura em Camadas, onde devem ser separada a lógica de negócio da aplicação da camada de apresentação e persistência dos dados. Isso promove uma maior agilidade no desenvolvimento e manutenção do software.

Para manter a consistência e legibilidade do código, as seguintes convenções de nomenclatura devem ser seguidas no projeto:

- **Variáveis e Funções**: Utilize `camelCase` para nomes de variáveis e funções.
  - Exemplo: `getUserInfo`, `userData`.

- **Classes e Interfaces**: Utilize `PascalCase` para nomes de classes e interfaces.
  - Exemplo: `UserModel`, `IUser`.

- **Arquivos**: Nomeie arquivos TypeScript usando `kebab-case`.
  - Exemplo: `user-model.ts`, `user-interface.ts`.

- **Pastas**: Utilize `kebab-case` para nomes de pastas.
  - Exemplo: `user-profile`, `data-access`.

- **Constantes**: Utilize `UPPER_SNAKE_CASE` para constantes.
  - Exemplo: `MAX_USERS`, `API_URL`.

- **Enums**: Utilize `PascalCase` para enums e seus valores.
  - Exemplo: `enum UserRole { Admin, User }`.

- **Tipos Genéricos**: Utilize uma única letra maiúscula, começando com `T`.
  - Exemplo: `T`, `K`, `V`, `TUser`.

- **Rotas**: Utilize `kebab-case` para nomes de rotas.
  - Exemplo: `/get-user-info`, `/update-user`.

- **Banco de Dados**:
  - **Coleções/Tabelas**: Utilize `snake_case` e no plural.
    - Exemplo: `users`, `user_profiles`.
  - **Campos/Colunas**: Utilize `snake_case`.
    - Exemplo: `user_id`, `email_address`.

- **Testes**:
  - Arquivos de teste devem seguir o padrão `[nome-do-arquivo].spec.ts` ou `[nome-do-arquivo].test.ts`.
    - Exemplo: `user-model.spec.ts`.
  - Descreva casos de teste usando frases claras e descritivas, começando com `should`.
    - Exemplo: `it('should return a user by ID', () => {})`.

Seguir estas convenções ajuda a manter o código organizado, facilita a leitura e compreensão por outros desenvolvedores, e suporta boas práticas de desenvolvimento de software.

## Contribuição

A contribuição deve ser feita seguindo o fluxo do Git Flow, como mostrado no exemplo abaixo:

![Git Flow](git-flow.png)

O padrão de commits deve ser o de [Commits Semânticos](https://www.notion.so/Commits-Sem-nticos-7b68fea8057f44be94233de5f4893c23), o repositório está configurado para permitir apenas commits que seguem o padrão, além de possuir uma ferramenta automatizada para gerar as mensagens de commits, através do comando `npm run commit`.

No contexto do projeto, as branches principais são as branches main(para produção) e develop(para desenvolvimento) e cada funcionalidade nova será uma branch feature, criada a partir da branch develop.

Cada funcionalidade nova ou correção de código devem ser feitas em branches próprias, seguindo também uma nomenclatura parecida com a dos commits semânticos, adotando o tipo da branch seguindo do nome da branch, por exemplo: `feature/autenticacao-usuario` ou `hotfix/rota-entrevistas`.

**Não devem ser feitos commits nas branches principais!** Os commits serão feitos nas branches secundárias e integradas às branches principais a partir de Pull Requests, que serão revisados por no mínimo 2 pessoas.
