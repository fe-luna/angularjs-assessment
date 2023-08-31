class ChatController {
  constructor(StateService, $location) {
    this.name = "chat";

    // TODO use $routeParams?
    const path = $location.path();
    const splits = path.split("/");
    this.uid = splits[2];
    this.currentUser = StateService.getCurrentUser();
    this.chatUser = StateService.getUserByUid(this.uid);
    this.msgs = StateService.getChatByUid(this.uid).map((item) => {
      const isMe = item.from === this.currentUser.uid;
      item.isMe = isMe;
      item.avatar = isMe ? this.currentUser.avatar : this.chatUser.avatar;
      return item;
    });
    console.log("uid", this.uid);
    console.log("currentUser", this.currentUser);
    console.log("chatUser", this.chatUser);
    console.log("msgs", this.msgs);
  }
}

ChatController.$inject = ["StateService", "$location"];

export default ChatController;
