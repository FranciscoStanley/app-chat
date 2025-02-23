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

