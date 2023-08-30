import angular from "angular";
import Home from "./home/home";
import About from "./about/about";

let pagesModule = angular.module("app.pages", [Home, About]).name;

export default pagesModule;
