import template from "./contact.html";
import controller from "./contact.controller";
import "./contact.scss";

let contactComponent = {
  bindings: {
    name: "<",
    badges: "<",
    score: "<",
    msg: "<",
    time: "<",
  },
  template,
  controller,
};

export default contactComponent;
