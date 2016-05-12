Ext.define('Meals.view.meal.Form', {
    extend: 'Ext.form.Panel',
    requires: ['Meals.view.meal.FormController'],
    xtype: 'meal-form',
    viewModel: new Ext.app.ViewModel(),
    controller: 'meal-form',
    defaultType: 'textfield',
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    items: [{
        fieldLabel: 'Meal Name',
        label: 'Meal Name',
        width: '50%',
        name: 'first',
         bind: {
             value: '{meal.name}'
         },
        allowBlank: false
    },
    {
        xtype: 'container',
        layout: {
            type: 'hbox',
            align: 'center',
            pack: 'middle'
        },
        items: [
        {
            xtype: 'button',
            text: 'Save',
            //formBind: true, //only enabled once the form is valid
            //disabled: true,
            handler: 'saveMeal'
        },
        {
            xtype: 'button',
            text: 'Cancel',
            //formBind: true, //only enabled once the form is valid
            //disabled: true,
            handler: 'cancelSaveMeal'
        },
        {
            xtype: 'button',
            text: 'Delete',
            //formBind: true, //only enabled once the form is valid
            //disabled: true,
            handler: 'deleteMeal'
        }]
    }]
/*
      buttons: [{
          text: 'Save',
          formBind: true, //only enabled once the form is valid
          disabled: true,
          handler: 'saveMeal'
          }]*/
});