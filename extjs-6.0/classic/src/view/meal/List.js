/**
 * This view is an example list of people.
 */
Ext.define('Meals.view.meal.List', {
    extend: 'Ext.grid.Panel',
    requires: ['Meals.view.meal.ListController', 'Meals.store.Meals','Ext.grid.column.Action', 'Ext.layout.container.VBox'],
    xtype: 'meal-list',
    controller: 'meal-list',

    title: 'Meals',

    store: {
        type: 'meal'
    },

    columns: [
        { text: 'ID',  dataIndex: 'id', width: 50 },
        { text: 'Name',  dataIndex: 'name', flex: 1 },
        {
            xtype:'actioncolumn',
            width:25,
            layout: {
                type: 'vbox',
                align: 'left'
            },
            items: [{
                iconCls: 'x-fa fa-edit',
                tooltip: 'Edit Meal',
                handler: 'editMealButton'
            }]
        }
    ],

    tools:[{
        type:'plus',
        tooltip: 'Add Meal',
        handler: 'addMeal'
    },{
        type:'refresh',
        tooltip: 'Refresh',
        handler: 'refreshMeals'
    }],

    listeners: {
        itemdblclick: 'editMealDblClick'
    }
});
