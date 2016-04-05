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

    title: 'Meals',

    store: {
        type: 'meal'
    },

    columns: [
        { text: 'ID',  dataIndex: 'id', width: 50 },
        { text: 'Name',  dataIndex: 'name', flex: 1 },
        {
            xtype:'actioncolumn',
            width:50,
            layout: {
                type: 'vbox',
                align: 'left'
            },
            items: [{
                iconCls: 'x-fa fa-edit',
                tooltip: 'Edit Meal',
                handler: 'editMeal'
            },{
                iconCls: 'x-fa fa-remove',
                tooltip: 'Delete Meal',
                handler: 'deleteMeal'
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
    }]
});
