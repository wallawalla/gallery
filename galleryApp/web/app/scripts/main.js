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
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',

        approuter: 'routes/approuter',
        views: 'views',
        templates: 'templates'
    }
});

require([
    'backbone',
    'approuter'
], function (Backbone, Approuter) {
    new Approuter();
});