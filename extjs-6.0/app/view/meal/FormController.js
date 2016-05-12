/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Meals.view.meal.FormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.meal-form',

    saveMeal: function() {

      var ctrlr = this;

      this.getViewModel().data.meal.save({
              success: function(meal, operation) {
                 ctrlr.getView().fireEvent("mealsUpdated", meal, operation);
                 Meals.toast('Meal saved successfully');
              },
              failure: function(meal, operation) {
                 ctrlr.getView().fireEvent("mealsUpdated", meal, operation);
                 Meals.toast('Meal save failed');
              }
          });
    },

    cancelSaveMeal: function() {
        this.getView().fireEvent("mealsUpdateCancelled");
    },

    deleteMeal: function() {

      var ctrlr = this;

      this.getViewModel().data.meal.erase({
           success: function(meal, operation) {
              ctrlr.getView().fireEvent("mealsUpdated", meal, operation);
              Meals.toast('Meal deleted successfully');
           },
           failure: function(meal, operation) {
              ctrlr.getView().fireEvent("mealsUpdated", meal, operation);
              Meals.toast('Meal delete failed');
           }
        });
    }
});
