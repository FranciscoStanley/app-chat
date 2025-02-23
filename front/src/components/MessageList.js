import React from "react";

const MessageList = ({ messages }) => {
  return (
    <div
      className="message-list"
      style={{ overflowY: "scroll", height: "400px" }}
    >
      {messages.map((msg, index) => (
        <div key={index} className="message">
          <strong>{msg.sender}: </strong>
          {msg.content}
          <div style={{ fontSize: "0.8em", color: "gray" }}>
            {new Date(msg.timestamp).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
