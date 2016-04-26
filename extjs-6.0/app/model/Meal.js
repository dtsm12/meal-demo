Ext.define('Meals.model.Meal', {
   extend: 'Ext.data.Model',
   requires: ['Ext.data.identifier.Negative'],
   fields: [
       {name: 'id',  type: 'int'},
       {name: 'name',  type: 'string'}
   ],

   identifier: 'negative', // to generate -1, -2 etc on the client

   proxy: {
       type: 'rest',
       url: 'http://spring-boot-rest-jpa-hyperbarbarous-literalist.cfapps.io/meals',
       reader: {
           type: 'json'
       }
   }
});
