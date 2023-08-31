import angular from "angular";
import Contact from "./contact/contact";
import Navbar from "./navbar/navbar";
import Sidebar from "./sidebar/sidebar";

const componentsModule = angular.module("app.components", [
  Contact,
  Navbar,
  Sidebar,
]).name;

export default componentsModule;
