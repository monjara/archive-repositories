import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "LearningBot",
  initialMessages: [createChatBotMessage(`こんにちは、あなたは何を学びたいですか？`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
}

export default config;