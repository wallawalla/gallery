/*global define*/

define([
    'jquery',
    'backbone',
    'eventsmanager',
    'bodatamanager',
    'appdata',
    'views/menu',
    'views/home',
    'views/categories',
    'views/gallery'
], function ($, Backbone, EventsManager, BODataManager, AppData, MenuView, HomeView, CatView, GalleryView) {
    'use strict';

    var ApprouterRouter = Backbone.Router.extend({
        routes: {
            '/' : 'home',
            'home': 'home',
            'categories' : 'categories',
            'gallery/:catname' : 'gallery'
        },

        initialize: function () {
            // Init views
            this.menuView   = new MenuView();
            this.homeView   = new HomeView();
            this.catView    = new CatView();
            this.galleryView = new GalleryView();

            var self = this;

            // launch app when device is ready
            document.addEventListener('deviceready', function () {
                self.onDeviceReady();
            }, false);
            this.onDeviceReady(); // Uncomment for grunt serve
        },

        onDeviceReady: function () {
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
        },

        gallery: function (catname) {
            this.galleryView.render(catname);
            this.menuView.render();
        }
    });

    return ApprouterRouter;
});