const chatService = require("../services/chatService");

class ChatController {
  async getChatHistory(req, res) {
    try {
      const limit = parseInt(req.query.limit) || 50;
      const messages = await chatService.getChatHistory(limit);
      res.json(messages);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async postMessage(req, res) {
    try {
      const messageData = req.body;
      const newMessage = await chatService.sendMessage(messageData);
      res.status(201).json(newMessage);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ChatController();
