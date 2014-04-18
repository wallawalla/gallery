/*global define, alert*/

define([
    'jquery',
    'backbone',
    'eventsmanager',
    'bodatamanager',
    'appdata',
    'views/menu',
    'views/home',
    'views/categories'
], function ($, Backbone, EventsManager, BODataManager, AppData, MenuView, HomeView, CatView) {
    'use strict';

    var ApprouterRouter = Backbone.Router.extend({
        routes: {
            '/' : 'home',
            'home': 'home',
            'categories' : 'categories'
        },

        initialize: function () {
            // Init views
            this.menuView   = new MenuView();
            this.homeView   = new HomeView();
            this.catView    = new CatView();

            var self = this;

            // launch app when device is ready
            document.addEventListener('deviceready', function () {
                self.onDeviceReady(self);
            }, false);
            this.onDeviceReady(self); // Uncomment for grunt serve
        },

        onDeviceReady: function (context) {
            // Load DB
            BODataManager.initData();

            EventsManager.events.on('approuter:start', this.start, this);
        },

        start: function () {
            Backbone.history.start();
            this.navigate('home', {trigger:true, replace:false});
        },

        home: function () {
            this.homeView.render();
            this.menuView.render();
        },

        categories: function () {
            this.catView.render();
            this.menuView.render();
        }
    });

    return ApprouterRouter;
});