Ext.define('Meals.store.Meals', {
    extend: 'Ext.data.Store',
    requires: ['Meals.model.Meal'],

    alias: 'store.meal',

    model: 'Meals.model.Meal',

    autoLoad : true,

    proxy: {
        type: 'ajax',
        url: 'http://spring-boot-rest-jpa-hyperbarbarous-literalist.cfapps.io/meals',
        reader: {
            type: 'json',
            rootProperty: '_embedded.meals'
        }
    }
});
