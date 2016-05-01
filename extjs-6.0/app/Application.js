/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Meals.Application', {
    extend: 'Ext.app.Application',
    requires: ['Meals.Toast'],
    name: 'Meals',

    stores: [

    ],
    
    launch: function () {
        Ext.Ajax.on("requestexception", function( conn, response, options, eOpts ){
                if(response.status <= 0) {
                    response.statusText = 'Server unreachable';
                }
                if(Ext.isEmpty(response.statusText))
                {
                    response.statusText = 'Unknown Error';
                }
                Meals.toast(response.statusText);
        });
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
