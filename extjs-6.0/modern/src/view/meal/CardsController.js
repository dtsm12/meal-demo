/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Meals.view.meal.CardsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.meal-cards',

    mealsUpdated: function(meal, operation)
    {
        this.getView().down('meal-list').getController().mealsUpdated(meal, operation);
    },

    mealsUpdateCancelled: function(meal, operation)
    {
        this.getView().down('meal-list').getController().mealsUpdateCancelled();
    }
});
