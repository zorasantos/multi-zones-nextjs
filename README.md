Depois de pesquisar bastante sobre multi zones, percebemos que existem poucos conteúdos sobre essa feature do nextjs, em lingua portuguesa quase nada. Nesse repositório vamos trabalhar com essa feature que nos parece ser bastante interessante. 

## Multi Zones
Você pode mesclar multiplos app's em um único, permitindo a navegação em uma única URL. Você pode desenvolver e implantar os multiplos app's de forma independente.

## Run Project
Esse monorepo está dockerizado. Pra subir todos os app's de uma só vez, executar o comando abaixo:

```bash
  docker-compose up -d
```

Caso não tenha o docker instalado na sua máquina, entrar em cada app e subir executando yarn dev:

App Home:

```bash
  yarn dev
```

App Blog:

```bash
  yarn dev -p 3001
```
App Docs:

```bash
  yarn dev -p 3002
```

## Example

Acesse a rota abaixo:

```bash
  http://localhost:3000/blog
```

O app home está rodando na porta 3000 e a rota /blog está no app blog que está rodando na porta 3001. Os app's home e blog são projetos diferentes, mas o app home consegue acessar as páginas do app blog. Essa é a ideia do multi zones como está descrito acima.  
