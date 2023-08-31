class ChatController {
  constructor(StateService, $location) {
    this.name = "chat";

    // TODO use $routeParams?
    const path = $location.path();
    const splits = path.split("/");
    this.uid = splits[2];
    this.chat = StateService.getChatByUid(this.uid);
    console.log("uid", this.uid);
    console.log("chat", this.chat);
  }
}

ChatController.$inject = ["StateService", "$location"];

export default ChatController;
