# 📚 Livraria Frontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.1.

Frontend da aplicação **Livraria**, desenvolvido com Angular e
containerizado com Docker.\
Preparado para execução local e deploy em Kubernetes (Minikube).

------------------------------------------------------------------------

## 🚀 Tecnologias

-   Angular
-   Node.js
-   Nginx
-   Docker
-   Kubernetes
-   Minikube

------------------------------------------------------------------------

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## 📦 Build do Projeto Angular

Instalar dependências:

``` bash
npm install
```

Build de produção:

``` bash
npm run build
```

------------------------------------------------------------------------

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.



# 🐳 Executando com Docker

## 🔨 Build da imagem

``` bash
docker build -t livraria-frontend .
```

## 🏷️ Criar tag para o Docker Hub

``` bash
docker tag livraria-frontend jardelcruz1/livraria-frontend:v1
```

## 📤 Enviar imagem para o Docker Hub

``` bash
docker push jardelcruz1/livraria-frontend:v1
```

## ▶️ Rodar localmente

``` bash
docker run -p 8080:80 livraria-frontend
```

Acesse:

http://localhost:8080

------------------------------------------------------------------------

# ☸️ Executando no Kubernetes (Minikube)

## 📦 Criar Deployment

``` bash
kubectl create deployment livraria-deployment --image=jardelcruz1/livraria-frontend:v1
```

## 🌐 Expor como Service

``` bash
kubectl expose deployment livraria-deployment --type=NodePort --port=80
```

## 🔎 Verificar Pods

``` bash
kubectl get pods
```

## 📊 Escalar aplicação

``` bash
kubectl scale deployment livraria-deployment --replicas=3
```

Verificar novamente:

``` bash
kubectl get pods
```

## 📜 Visualizar logs

``` bash
kubectl logs <nome-do-pod>
```

## 🌍 Acessar aplicação

``` bash
minikube service livraria-deployment
```

> ⚠️ No Windows usando driver Docker, o terminal deve permanecer aberto
> para manter o túnel ativo.

------------------------------------------------------------------------

# 🏗️ Arquitetura

A aplicação utiliza uma imagem Docker multi-stage:

1.  Stage 1 → Build do Angular com Node
2.  Stage 2 → Servidor Nginx servindo os arquivos estáticos

Fluxo da aplicação:

Usuário → Angular (Nginx) → API Spring Boot → MySQL

------------------------------------------------------------------------

# 📌 Requisitos

-   Docker instalado
-   Minikube instalado
-   Kubectl configurado

------------------------------------------------------------------------

# 👨‍💻 Autor

**Jardel Cruz**\
Docker Hub: https://hub.docker.com/r/jardelcruz1


