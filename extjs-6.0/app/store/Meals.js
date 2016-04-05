Ext.define('Meals.store.Meals', {
    extend: 'Ext.data.Store',

    alias: 'store.meal',

    model: 'Meals.model.Meal',

    autoLoad : false,

    proxy: {
        type: 'ajax',
        url: 'http://localhost:8080/meals',
        reader: {
            type: 'json',
            rootProperty: '_embedded.meals'
        }
    }
});
