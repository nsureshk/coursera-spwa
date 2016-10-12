(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  var message = "";
  $scope.lunchMenu = "";
  $scope.displayMessage = "";
  $scope.checkLunchStatus = function () {
    var itemCount = calculateNumLunchItems($scope.lunchMenu);
    $scope.displayMessage = showMessage(itemCount);
  };
  function showMessage(count) {
    if (count === 0) return "Please enter data first";
    else if (count <= 3) return "Enjoy!";
    else return "Too much!";
  }
  /**
   * Calculates the number of lunch items.
   * Note that an empty item is not included in the count.
   * For example: calculateNumLunchItems("a,,b") = 2.
  **/
  function calculateNumLunchItems(lunchItems) {
    var lunchItemsArray = lunchItems.split(",");
    var count = 0;
    for(var i = 0 ; i < lunchItemsArray.length ; i++) {
      if(!isEmptyLunchItem(lunchItemsArray[i])) count++;
    }
    return count;
  }
  function isEmptyLunchItem(lunchItem) {
    return lunchItem.length === 0; //trim not needed since ng-model does all the work
  }
};

})();
