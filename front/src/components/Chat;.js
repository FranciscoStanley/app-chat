import React, { useState, useEffect } from "react";
import socket from "../services/socketService";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import axios from "axios";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Carrega o histórico de mensagens ao montar o componente
    axios
      .get("http://localhost:3000/api/chat/messages")
      .then((response) => {
        // Ordena do mais antigo para o mais recente
        setMessages(response.data.reverse());
      })
      .catch((error) => console.error(error));

    // Escuta novas mensagens enviadas pelo servidor via Socket.IO
    socket.on("receiveMessage", (messageData) => {
      setMessages((prevMessages) => [...prevMessages, messageData]);
    });

    // Remove o listener ao desmontar o componente
    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const handleSendMessage = (messageData) => {
    // Envia a mensagem via socket
    socket.emit("sendMessage", messageData);
    // Opcional: também envia via API REST para persistir no banco de dados
    axios
      .post("http://localhost:3000/api/chat/messages", messageData)
      .catch((error) => console.error(error));
  };

  return (
    <div className="chat-container">
      <MessageList messages={messages} />
      <MessageInput onSend={handleSendMessage} />
    </div>
  );
};

export default Chat;
