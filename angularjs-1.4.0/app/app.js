'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.meal.list',
  'myApp.view2'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/meal/list'});
}])

.config(['$httpProvider', function($httpProvider) {
     $httpProvider.interceptors.push(function($q) {
        return {
          responseError: function(rejection) {
                if(rejection.status <= 0) {
                    rejection.status = 500;
                    rejection.statusText = 'Server unreachable';
                }
                return $q.reject(rejection);
            }
        };
    });
}])

.directive('modal', function () {
    return {
      template: '<div class="modal fade">' +
          '<div class="modal-dialog">' +
            '<div class="modal-content">' +
              '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
                '<h4 class="modal-title">{{ meal.id <= 0 ? "New Meal" : "Edit Meal" }}</h4>' +
              '</div>' +
              '<div class="modal-body" ng-transclude></div>' +
            '</div>' +
          '</div>' +
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
})

/*
.controller('MainCtrl', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.successAlertMessage = null;
    $scope.errorAlertMessage = null;
    var mainPageScope = $scope;
    this.showSuccess = function(message)
    {
        mainPageScope.successAlertMessage = message;
        $timeout(function(){mainPageScope.successAlertMessage = null;}, 2000);
    };

    this.showError = function(message)
    {
        mainPageScope.errorlertMessage = message;
        $timeout(function(){mainPageScope.errorAlertMessage = null;}, 2000);
    };
}])
*/
;