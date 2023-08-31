import angular from "angular";
import Contact from "./contact/contact";
import Navbar from "./navbar/navbar";
import Sidebar from "./sidebar/sidebar";
import Bubble from "./bubble/bubble";

const componentsModule = angular.module("app.components", [
  Contact,
  Navbar,
  Sidebar,
  Bubble,
]).name;

export default componentsModule;
