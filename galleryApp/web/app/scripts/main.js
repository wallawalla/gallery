/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },
    paths: {
        jquery          : '../bower_components/jquery/jquery',
        backbone        : '../bower_components/backbone/backbone',
        underscore      : '../bower_components/underscore/underscore',

        approuter       : 'routes/approuter',
        models          : 'models',
        collections     : 'collections',
        views           : 'views',
        templates       : 'templates',

        eventsmanager   : 'managers/eventsmanager',
        bodatamanager   : 'managers/BODataManager',

        appdata         : 'models/appData'
    }
});

require([
    'backbone',
    'approuter'
], function (Backbone, Approuter) {
    new Approuter();
});