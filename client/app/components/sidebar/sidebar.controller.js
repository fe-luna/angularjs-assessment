class SidebarController {
  constructor(StateService) {
    this.name = "sidebar";
    this.contacts = StateService.getContacts();
    console.log(this.contacts);
  }
}

SidebarController.$inject = ["StateService"];

export default SidebarController;
