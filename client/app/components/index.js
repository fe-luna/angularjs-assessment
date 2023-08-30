import angular from "angular";
import Navbar from "./navbar/navbar";
import Sidebar from "./sidebar/sidebar";
import User from "./user/user";

const componentsModule = angular.module("app.components", [
  Navbar,
  Sidebar,
  User,
]).name;

export default componentsModule;
