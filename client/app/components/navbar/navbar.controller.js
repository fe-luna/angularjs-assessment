class NavbarController {
  constructor(StateService, $location) {
    this.name = "navbar";
    this.currentUser = StateService.getCurrentUser();

    this.toHome = function () {
      $location.path(`/`);
    };
  }
}

NavbarController.$inject = ["StateService", "$location"];

export default NavbarController;
