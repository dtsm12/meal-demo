/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Meals.view.meal.ListControllerShared', {
    extend: 'Ext.app.ViewController',

    openMealEditor: function (meal) {
        // to be overriden by view specific controller
    },

    mealsUpdated: function(meal, operation) {
        // to be overriden by view specific controller
    },

    mealsUpdateCancelled: function() {
        // to be overriden by view specific controller
    },

    init: function(view) {
      this.refreshMeals();
    },

    refreshMeals: function() {
      this.getView().getStore().loadPage(0);
    },

    addMeal: function () {
       var meal = new Meals.model.Meal();
       this.openMealEditor(meal);
    }
});
