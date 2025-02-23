import express, { json } from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import db from "./src/utils/db.js";
import chatRoutes from "./src/routes/chatRoutes.js";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

const PORT = process.env.PORT || 3000;

// Middleware para interpretar JSON
app.use(json());

// Rotas da API
app.use("/api/chat", chatRoutes);

// Configuração do Socket.io
io.on("connection", (socket) => {
  console.log("Novo cliente conectado: " + socket.id);

  socket.on("sendMessage", async (messageData) => {
    // Aqui você pode incluir regras de negócio ou validação antes de salvar a mensagem
    // Emite para todos os clientes a mensagem recebida
    io.emit("receiveMessage", messageData);
  });

  socket.on("disconnect", () => {
    console.log("Cliente desconectado: " + socket.id);
  });
});

// Inicializa a conexão com o banco de dados e inicia o servidor
db.connect()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Falha na conexão com o banco de dados", error);
  });
