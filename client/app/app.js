import angular from "angular";
import uiRouter from "angular-ui-router";
import Components from "./components";
import Pages from "./pages";
import AppComponent from "./app.component";
import "./static/jquery.global.js";
import "./static/semantic/semantic.min.css";
import "./static/semantic/semantic.min.js";

angular
  .module("app", [uiRouter, Components, Pages])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix("!");
  })

  .component("app", AppComponent);
