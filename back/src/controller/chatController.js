import {
  getChatHistory as serviceGetChatHistory,
  sendMessage as serviceSendMessage,
} from "../services/chatService.js";

export async function getChatHistory(req, res) {
  try {
    const limit = parseInt(req.query.limit) || 50;
    const messages = await serviceGetChatHistory(limit);
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function postMessage(req, res) {
  try {
    const messageData = req.body;
    const newMessage = await serviceSendMessage(messageData);
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
