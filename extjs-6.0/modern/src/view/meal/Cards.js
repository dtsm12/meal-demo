Ext.define('Meals.view.meal.Cards', {
    extend: 'Ext.Container',
    requires: ['Meals.view.meal.List', 'Meals.view.meal.Form', 'Meals.view.meal.CardsController'],
    xtype: 'meal-cards',
    controller: 'meal-cards',
    layout: 'card',
    items: [
        {
            xtype: 'meal-list'
        },
        {
            xtype: 'meal-form',
            listeners: {
                 mealsUpdated: {
                    fn: 'mealsUpdated'
                 },
                 mealsUpdateCancelled: {
                    fn: 'mealsUpdateCancelled'
                 }
            }
        }
    ]
});