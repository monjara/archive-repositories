class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();

      if (lowerCaseMessage.includes("こんにちは")) {
        this.actionProvider.greet();
      } else if (lowerCaseMessage.includes("javascript")) {
        this.actionProvider.handleJavascriptList();
      } else {
        this.actionProvider.default();
      }
    }
  }
  
  export default MessageParser;
  