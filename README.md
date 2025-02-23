# Chat Profissional

Este projeto implementa um chat profissional com uma arquitetura limpa, utilizando Node.js no back-end e React.js no front-end. A aplicação utiliza Socket.IO para comunicação em tempo real e MongoDB para persistência das mensagens, seguindo boas práticas de Clean Code e separação em camadas (Controllers, Services, Repositories e Models).

## Funcionalidades

- **Chat em tempo real:** Mensagens são trocadas instantaneamente entre os usuários utilizando Socket.IO.
- **Histórico de mensagens:** As conversas são salvas no MongoDB para que o histórico seja mantido.
- **Arquitetura organizada:** O back-end está dividido em camadas, facilitando a manutenção e a escalabilidade.
- **Interface moderna:** O front-end utiliza React.js para uma experiência de usuário fluida, semelhante a chats de aplicativos populares.

## Tecnologias Utilizadas

**Back-End:**
- Node.js
- Express
- Socket.IO
- MongoDB (com Mongoose)
- Estrutura modular (Controllers, Services, Repositories, Models)

**Front-End:**
- React.js
- Socket.IO-client
- Axios (para requisições REST)

## Estrutura do Projeto

### Backend

backend/ ├── package.json ├── server.js └── src/ ├── controllers/ │ └── chatController.js ├── models/ │ └── message.js ├── repositories/ │ └── chatRepository.js ├── routes/ │ └── chatRoutes.js ├── services/ │ └── chatService.js └── utils/ └── db.js

### Frontend

frontend/ ├── package.json └── src/ ├── components/ │ ├── Chat.js │ ├── MessageList.js │ └── MessageInput.js ├── services/ │ └── socketService.js ├── App.js └── index.js

## Instalação e Execução Back-end

### Pré-requisitos

- Node.js (versão 14 ou superior)
- MongoDB (para o back-end)

### Back-End

1. Acesse a pasta `backend`:
   ```bash
     cd backend
   ```
2. Instale as dependências:
   ```basg
     npm install
   ```
3. Configure a conexão com o MongoDB (opcionalmente criando um arquivo .env):
     ```bash
       MONGODB_URI=mongodb://localhost:27017/chat
    ```
4. Inicie o servidor:
    ```bash
      npm start
    ```

## Instalação e Execução Front-end

1. Acesse a pasta frontend:
    ```bash
      cd frontend
    ```
2. Instale as dependências:
    ```bash
      npm install
    ```
3. Inicie o aplicativo React:
   ```bash
    npm start
   ```

Uso
  Comunicação em tempo real: Utilize a interface para enviar e receber mensagens instantaneamente.
  Histórico de Mensagens: Ao abrir a aplicação, o histórico das últimas mensagens será carregado do back-end.
  Contribuições
  Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request para melhorar o projeto.
  
Licença
  Este projeto é licenciado sob a Licença MIT.

---

## .gitignore para o Back-End

Crie um arquivo chamado `.gitignore` na pasta `backend` com o seguinte conteúdo:

```gitignore
   # Diretórios de dependências
   node_modules/
   jspm_packages/
   
   # Logs e arquivos de debug
   logs/
   *.log
   npm-debug.log*
   yarn-debug.log*
   lerna-debug.log*
   
   # Dados de execução
   pids/
   *.pid
   *.seed
   *.pid.lock
   
   # Diretórios de cobertura de testes
   coverage/
   .nyc_output/
   *.lcov
   
   # Diretórios de build e arquivos gerados
   build/
   dist/
   lib-cov/
   
   # Arquivos de cache do npm e do ESLint
   .npm/
   .eslintcache
   
   # Arquivos gerados pelo npm pack
   *.tgz
   
   # Arquivo de integridade do Yarn
   .yarn-integrity
   
   # Arquivos de ambiente (não versionar)
   .env
   .env.*.local
   
   # Arquivos e diretórios do sistema operacional
   .DS_Store
   
   # Configurações de editores/IDE
   .idea/
   .vscode/
   *.sublime-project
   *.sublime-workspace
```

## .gitignore para o Front-end

Crie um arquivo chamado .gitignore na pasta frontend com o seguinte conteúdo:

```gitignore
   # See https://help.github.com/articles/ignoring-files/ for more about ignoring files.
   
   # dependencies
   /node_modules
   /.pnp
   .pnp.js
   
   # testing
   /coverage
   
   # production
   /build
   
   # misc
   .DS_Store
   .env.local
   .env.development.local
   .env.test.local
   .env.production.local
   
   npm-debug.log*
   yarn-debug.log*
   yarn-error.log*
```


