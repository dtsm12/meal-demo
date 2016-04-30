/**
 * Centralise the toast behaviour
 */
Ext.define('Meals.view.Toast', {

    toast: function(message) {
        Ext.toast({
                   html: message,
                   align: 't'
                  });
    }
});
