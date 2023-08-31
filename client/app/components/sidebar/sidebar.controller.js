class SidebarController {
  constructor(StateService, $location) {
    this.name = "sidebar";
    this.contacts = StateService.getContacts();
    console.log(this.contacts);

    this.toChat = function (uid) {
      $location.path(`/chat/${uid}`);
    };
  }
}

SidebarController.$inject = ["StateService", "$location"];

export default SidebarController;
