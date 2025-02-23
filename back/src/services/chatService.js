import {
  getChatHistory as repoGetChatHistory,
  saveMessage,
} from "../repositories/chatRepository.js";

export async function getChatHistory(limit) {
  return await repoGetChatHistory(limit);
}

export async function sendMessage(messageData) {
  return await saveMessage(messageData);
}
