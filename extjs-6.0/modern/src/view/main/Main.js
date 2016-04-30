/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('Meals.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Ext.Toast',

        'Meals.view.main.MainController',
        'Meals.view.main.MainModel',
        'Meals.view.meal.List',
        'Meals.view.meal.ListController'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },

    tabBarPosition: 'bottom',

    items: [
        {
            title: 'Meals',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            items: [{
                xtype: 'meallist'
            }]
        }]
});
