(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;
    toBuyList.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
    toBuyList.buyItem = function(index) {
      ShoppingListCheckOffService.buyItem(index);
    };
  }
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;
    boughtList.boughtItems = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [
      {
        name: "Milk",
        quantity: "2"
      },
      {
        name: "Donuts",
        quantity: "200"
      },
      {
        name: "Cookies",
        quantity: "300"
      },
      {
        name: "Chocolate",
        quantity: "5"
      },
      {
        name: "Cheese",
        quantity: "3"
      },
      {
        name: "Ice cream",
        quantity: "10"
      }
    ];
    var boughtItems = [];
    service.getToBuyItems = function() {
      return toBuyItems;
    };
    service.getBoughtItems = function () {
      return boughtItems;
    };
    service.buyItem = function(index) {
      var boughtItem = toBuyItems.splice(index, 1);
      boughtItems.push(boughtItem[0]);
    };
  }

})();
