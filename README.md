# Linklab.challenge

### Como executar?

> obs: Necessário possuir Nodejs e Docker em sua máquina.

1. Instalar as dependências do projeto com `yarn install` ou npm `install`
2. Criar um arquivo `.env` na raiz do projeto
3. Copiar conteúdo de `.env.example` e colar no `.env` 
4. Subir o banco em um container docker com `docker compose up -d` ou `docker-compose up -d`;
5. Popular a base com os produtos com `yarn seed` ou `npm run seed`
6. Iniciar o projeto com `yarn dev` ou `npm run dev`

