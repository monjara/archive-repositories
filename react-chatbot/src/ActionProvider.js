class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

    handleJavascriptList = () => {
      const message = this.createChatBotMessage(
        "了解しました。Javascriptの勉強サイトはこちらです：",
        {
          widget: "javascriptLinks",
        }
      );

      this.updateChatbotState(message);
    };

    greet() {
      const greetingMessage = this.createChatBotMessage("おっす");
      this.updateChatbotState(greetingMessage);
    }

    default() {
      const defaultMessage = this.createChatBotMessage("ちょっと意味がわかんないです");
      this.updateChatbotState(defaultMessage);
    }

    updateChatbotState(message) {
      this.setState(prevState => ({
        ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider;
  