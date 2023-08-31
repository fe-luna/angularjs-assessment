import template from "./bubble.html";
import controller from "./bubble.controller";
import "./bubble.scss";

let bubbleComponent = {
  bindings: {
    name: "<",
    msg: "<",
    time: "<",
    avatar: "<",
    isMe: "<",
    from: "<",
  },
  template,
  controller,
};

export default bubbleComponent;
