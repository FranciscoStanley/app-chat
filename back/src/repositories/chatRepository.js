import Message from "../models/message.js";

export async function getChatHistory(limit) {
  try {
    // Supondo que Message seja um modelo do Mongoose
    return await Message.find().sort({ createdAt: -1 }).limit(limit).exec();
  } catch (error) {
    throw new Error("Erro ao recuperar o histórico do chat: " + error.message);
  }
}

export async function saveMessage(messageData) {
  try {
    const message = new Message(messageData);
    return await message.save();
  } catch (error) {
    throw new Error("Erro ao salvar a mensagem: " + error.message);
  }
}
