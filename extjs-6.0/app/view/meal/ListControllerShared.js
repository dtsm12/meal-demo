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

    refreshMeals: function() {
      this.getView().getStore().loadPage(0);
    },

    editMeal: function(grid, rowIndex, colIndex) {
        var meal = grid.getStore().getAt(rowIndex);
        this.openMealEditor(meal);
    },

    deleteMeal: function(grid, rowIndex, colIndex) {
        var meal = grid.getStore().getAt(rowIndex);
        var ctrlr = this;
        meal.erase({
           success: function(meal, operation) {
              ctrlr.mealsUpdated();
              Ext.toast('Meal deleted successfully');
           },
           failure: function(meal, operation) {
              ctrlr.mealsUpdated();
              Ext.toast('Meal delete failed');
           }
        });
    },

     addMeal: function () {
        var meal = new Meals.model.Meal();
        this.openMealEditor(meal);
     }
});
