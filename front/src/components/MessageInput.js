import React, { useState } from "react";

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");

  const handleSend = () => {
    if (message.trim() && sender.trim()) {
      onSend({ sender, content: message, timestamp: new Date() });
      setMessage("");
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Seu nome"
        value={sender}
        onChange={(e) => setSender(e.target.value)}
      />
      <input
        type="text"
        placeholder="Digite uma mensagem..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") handleSend();
        }}
      />
      <button onClick={handleSend}>Enviar</button>
    </div>
  );
};

export default MessageInput;
