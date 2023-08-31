import angular from "angular";
import uiRouter from "angular-ui-router";
import bubbleComponent from "./bubble.component";

let bubbleModule = angular
  .module("bubble", [uiRouter])

  .component("bubble", bubbleComponent).name;

export default bubbleModule;
