(function(){
  "use strict";

  angular
    .module("inspirationBoard") // a new set of [] would create a new module.  We don't want to do that, we are just modifying an existing module
    .component("inspirationboardctrl", { //anything in here will be controller code
      controller: controller,
      templateUrl:  './main.html'

    })

    function controller() {
      const vm = this;

      vm.$onInit = function() {
        vm.name="Tara";
      }
    }
})();
