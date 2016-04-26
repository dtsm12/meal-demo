'use strict';

angular.module('myApp.meal.list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/meal/list', {
    templateUrl: 'meal/list/meal-list.html',
    controller: 'MealListCtrl'
  });
}])

.controller('MealListCtrl', ['$scope', '$timeout', 'MealsSvc', function($scope, $timeout, mealsService) {

    $scope.meal = null;
    $scope.meals = [];
    $scope.successMessage = null;
    $scope.errorMessage = null;
    $scope.showModal = false;

    $scope.toggleModal = function()
    {
        $scope.showModal = !$scope.showModal;
    };

    $scope.getMeals = function()
    {
        mealsService.getMeals().then(function(serviceResponse) {
            $scope.meals = serviceResponse.data;
            $scope.errorMessage = serviceResponse.message;
            $timeout(function(){$scope.errorMessage = null;}, 2000);
        });
    };

    $scope.getCurrentMeal = function()
    {
        return $scope.meal;
    };

    $scope.resetCurrentMeal = function()
    {
        $scope.meal = {id: -1, name: null};
    };

    $scope.editMeal = function(meal)
    {
        $scope.meal = meal;
        $scope.toggleModal();
    };

    $scope.saveMeal = function()
    {
        var meal = $scope.getCurrentMeal();

        // update view
        if(meal.id < 0) {
            $scope.meals.push(meal);
        }

        // update server & report on result
        mealsService.saveMeal(meal).then(function(serviceResponse) {

            $scope.toggleModal();

            if(serviceResponse.success)
            {
                meal.id = serviceResponse.data.id;
                $scope.resetCurrentMeal();
                $scope.successMessage = "Success !";
                $timeout(function(){$scope.successMessage = null;}, 2000);
            }
            else
            {
                $scope.errorMessage = serviceResponse.message;
                $timeout(function(){$scope.errorMessage = null;}, 2000);
            }
        });
    },

    $scope.deleteMeal = function(meal)
    {
        // update view
        var index = $scope.meals.indexOf(meal);
        if(index > -1) {
            $scope.meals.splice(index, 1);
        }

        // update server & report on result
        mealsService.deleteMeal(meal).then(function(serviceResponse) {
            if(serviceResponse.success)
            {
                $scope.successMessage = "Success !";
                $timeout(function(){$scope.successMessage = null;}, 2000);
            }
            else
            {
                $scope.errorMessage = serviceResponse.message;
                $timeout(function(){$scope.errorMessage = null;}, 2000);
            }
        });
    };

    // initial load
    $scope.resetCurrentMeal();
    $scope.getMeals();
}])

.factory('MealsSvc', function($http){
    return {

        mealHost: 'http://spring-boot-rest-jpa-hyperbarbarous-literalist.cfapps.io/meals',

        getMeals : function(){
            return $http.get(this.mealHost).then(function(response){
                return {success: false, message: null, data: response.data._embedded.meals};
            },function(response){
                return {success: false, message: response.statusText};
            });
        },
        saveMeal : function(meal){

            if(meal.id < 0)
            {
                return $http.post(this.mealHost, meal).then(function(response){
                    return {success: true, message: response.statusText, data: response.data};
                },function(response){
                    return {success: false, message: response.statusText};
                });
            }
            else
            {
                return $http.put(this.mealHost+meal.id, meal).then(function(response){
                    return {success: true, message: response.statusText, data: response.data};
                },function(response){
                    return {success: false, message: response.statusText};
                });
            }
        },
        deleteMeal : function(meal){
            return $http.delete(this.mealHost+meal.id).then(function(response){
                return {success: true, message: response.statusText};
            },function(response){
                return {success: false, message: response.statusText};
            });
        }
    }
});