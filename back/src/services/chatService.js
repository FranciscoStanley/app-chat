const chatRepository = require("../repositories/chatRepository");

class ChatService {
  async sendMessage(messageData) {
    // Adicione validações ou regras de negócio, se necessário
    return await chatRepository.createMessage(messageData);
  }

  async getChatHistory(limit) {
    return await chatRepository.getMessages(limit);
  }
}

module.exports = new ChatService();
