import angular from "angular";
import uiRouter from "angular-ui-router";
import $ from "jquery";
import homeComponent from "./home.component";

let homeModule = angular
  .module("home", [uiRouter])

  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise("/");

    $stateProvider.state("home", {
      url: "/",
      component: "home",
    });

    console.log($("title").text());
  })

  .component("home", homeComponent).name;

export default homeModule;
