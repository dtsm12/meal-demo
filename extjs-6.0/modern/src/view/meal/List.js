/**
 * This view is an example list of people.
 */
Ext.define('Meals.view.meal.List', {
    extend: 'Ext.grid.Grid',
    requires: ['Meals.view.meal.ListController'],
    xtype: 'meallist',
    controller: 'meallist',

    requires: [
        'Meals.store.Meals'
    ],

    store: {
        type: 'meal'
    },

    items:{
            xtype : 'toolbar',
            docked: 'top',
            title: 'Meals',

            layout: {
                type: 'hbox',
                pack: 'end'
            },

            items: [
                {
                    iconCls: 'x-fa fa-plus',
                    handler: 'addMeal',
                    ui: 'plain'
                },
                {
                    iconCls: 'x-fa fa-refresh',
                    handler: 'refreshMeals',
                    ui: 'plain'
                }
            ]
        },

    columns: [
        { text: 'ID',  dataIndex: 'id', width: 50 },
        { text: 'Name',  dataIndex: 'name', flex: 1 }
    ]
});
