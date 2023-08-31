import angular from "angular";
import Home from "./home/home";
import Chat from "./chat/chat";

let pagesModule = angular.module("app.pages", [Home, Chat]).name;

export default pagesModule;
