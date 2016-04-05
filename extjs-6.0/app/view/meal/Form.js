Ext.define('Meals.view.dish.Form', {
    extend: 'Ext.form.Panel',
    requires: ['Meals.view.meal.FormController'],
    xtype: 'mealform',
    controller: 'mealform',
    defaultType: 'textfield',
    items: [{
        fieldLabel: 'Meal Name',
        name: 'first',
         bind: {
             value: '{meal.name}'
         },
        allowBlank: false
    }],

      buttons: [{
          text: 'Save',
          formBind: true, //only enabled once the form is valid
          disabled: true,
          handler: 'saveMeal'
          }]

});