/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Meals.view.meal.ListController', {
    extend: 'Meals.view.meal.ListControllerShared',
    alias: 'controller.meal-list',

    editMealDblTap: function(grid, index, target, meal, e, eOpts ) {
        this.openMealEditor(meal);
    },

    openMealEditor: function (meal)
    {
        var cards = this.getView().up('meal-cards');
        cards.setActiveItem(1);
        var form = cards.down('meal-form');
        form.getViewModel().setData({meal:meal});
    },

    mealsUpdated: function(meal, operation)
    {
        var cards = this.getView().up('meal-cards');
        cards.setActiveItem(0);

        if(operation instanceof Ext.data.operation.Create)
        {
            this.getView().getStore().add(meal);
        }
    },

    mealsUpdateCancelled: function() {
        var cards = this.getView().up('meal-cards');
        cards.setActiveItem(0);
    }
});
