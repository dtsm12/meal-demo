/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Meals.view.meal.ListController', {
    extend: 'Meals.view.meal.ListControllerShared',
    requires: ['Ext.window.Window','Ext.layout.container.Border', 'Ext.app.ViewModel'],
    alias: 'controller.meallist',

    mealsUpdated: function(meal, operation) {

        if(this.mealDialogWindow)
        {
            this.mealDialogWindow.hide();
        }

        if(operation instanceof Ext.data.operation.Create)
        {
            this.getView().getStore().add(meal);
        }
    },

    openMealEditor: function (meal) {

       if(!this.mealDialogWindow)
       {
           this.mealDialogWindow = Ext.create('Ext.window.Window', {
                                                title: 'New Meal',
                                                header: {
                                                    titlePosition: 1,
                                                    titleAlign: 'center'
                                                },
                                                closable: true,
                                                closeAction: 'hide',
                                                maximizable: true,
                                                width: 600,
                                                minWidth: 350,
                                                height: 350,
                                                layout: {
                                                    type: 'border',
                                                    padding: 5
                                                },
                                                items: [{
                                                   region: 'center',
                                                   xtype: 'mealform',
                                                   viewModel: new Ext.app.ViewModel(),
                                                   listeners: {
                                                        mealsUpdated: {
                                                            fn: this.mealsUpdated,
                                                            scope: this
                                                        }
                                                   }
                                                }]
                                              });
        }

        var form = this.mealDialogWindow.down('mealform');
        form.getViewModel().setData({meal:meal});

        this.mealDialogWindow.show();
   }
});
