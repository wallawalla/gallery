/*global define*/

define([
    'jquery',
    'backbone',
    'views/home'
], function ($, Backbone, HomeView) {
    'use strict';

    var ApprouterRouter = Backbone.Router.extend({
        routes: {
            '/' : 'home',
            'home': 'home'
        },

        initialize: function () {
            // Init views
            this.homeView = new HomeView();

            var self = this;

            // launch app when device is ready
            document.addEventListener('deviceready', function () {
                self.start(self);
            }, false);
            // this.start(self); // Uncomment for grunt serve
        },

        start: function (context) {
            Backbone.history.start();
            context.navigate('home', {trigger:true, replace:false});
        },

        home: function () {
            this.homeView.render();
        }
    });

    return ApprouterRouter;
});