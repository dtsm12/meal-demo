Ext.define('Meals.model.Meal', {
    extend: 'Ext.data.Model',

   fields: [
       {name: 'id',  type: 'int'},
       {name: 'name',  type: 'string'}
   ],

   identifier: 'negative', // to generate -1, -2 etc on the client

   proxy: {
       type: 'rest',
       url: 'http://localhost:8080/meals',
       reader: {
           type: 'json'
       }
   }
});
