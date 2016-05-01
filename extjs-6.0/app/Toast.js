/**
 * Centralise the toast behaviour
 */
Ext.define('Meals.Toast', {
    singleton: true
},
 function () {
     Meals.toast = function(input) {
         if (Ext.isString(input))
         {
             Ext.toast({
                        html: input,
                        align: 't'
                       });
         }
         else
         {
             if(!input.align)
             {
                 input.align = 't';
             }

             Ext.toast(input);
         }
     };
});
