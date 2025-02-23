const Message = require("../models/message");

class ChatRepository {
  async createMessage(messageData) {
    const message = new Message(messageData);
    return await message.save();
  }

  async getMessages(limit = 50) {
    return await Message.find().sort({ timestamp: -1 }).limit(limit);
  }
}

module.exports = new ChatRepository();
