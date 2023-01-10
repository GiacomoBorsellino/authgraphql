<br />
<p align="center">

  <h3 align="center">Sistema di autenticazione/autorizzazione </h3>

  <p align="center">
    Sistema di autenticazione/autorizzazione che usa GraphQL, Prisma, Apollo e Angular
  </p>
    <p align="center">
    <img src="/FE/src/assets/authgraphql.jpg" alt="screenshot" width="50%">
  </p>
</p>

<details open="open">
  <summary><h2 style="display: inline-block">Indice</h2></summary>
  <ol>
    <li><a href="#tecnologieargomenti">Tecnologie</a></li>
    <li><a href="#installazione">Tecnologie/Installazione</a></li>
    <li><a href="#Funzionamento&Struttura">Tecnologie/Funzionamento&Struttura</a></li>
    <li><a href="#contatti">Contatti</a></li>
  </ol>
</details>

## Tecnologie

BE:
* Typescript
* GraphQL
* Apollo Server
* Prisma

FE:
* Angular
* Typescript
* Apollo Client

Uso librerie:
graphql-middleware
dotenv

## Installazione

1. Clona il repository

   ```sh
   git clone https://github.com/GiacomoBorsellino/Ororo
   ```

2. Entra nella cartella

   ```sh
   Cd authgraphql
   ```

3. Installa NPM

   ```sh
   npm install -g @angular/cli
   ```

4. Installa NPM in BE e FE

   ```sh
   npm install npm@latest -g
   npm install 
   ```

5. Cambia file .env.example in .env (BE/.env.example) e inserisci i parametri del DATABASE_URL e del SECRET
   (vedi struttura su documentazione Prisma).
[Prisma ORM](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgres).

6. Instanziamo il DB con Prisma

   ```sh
   npx prisma init
   configuriamo file env
   npx prisma db pull
   npm install @prisma/client
   npx prisma generate --schema prisma/schema.prisma 
   ```

7. Avviamo FE e BE usando gli script con

   ```sh
   npm run start
   ```

## Funzionamento&Struttura

## Licenza

Distribuito con licenza MIT

## Contatti
Profilo Linkedin, per collaborazioni o proposte di lavoro: [Linkedin](https://www.linkedin.com/in/giacomo-borsellino-4039071b7/)

</p>
  <p align="center">
  <img src="https://media.tenor.com/_RYK0Ae4XakAAAAi/vibing-cool-dogs.gif" alt="screenshot" width="50%">
</p>
