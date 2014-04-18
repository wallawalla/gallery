/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'eventsmanager'
], function ($, _, Backbone, JST, EventsManager) {
    'use strict';

    var MenuView = Backbone.View.extend({
        template: JST['app/scripts/templates/menu.ejs'],

        el: '#nav',

        events: {
            'click #homeLink'   : 'goToHomepage',
            'click #catLink'    : 'goToCategories'
        },

        initialize: function () {
            EventsManager.events.on('menu:display', this.displayHideMenu, this);
        },

        render: function () {
            this.$el.html(this.template());
        },

        displayHideMenu: function () {
            $('.pusher').toggleClass('active');
        },

        goToHomepage: function (evt) {
            evt.preventDefault();
            this.displayHideMenu();
            Backbone.history.navigate('home', {trigger:true, replace:false});
        },

        goToCategories: function (evt) {
            evt.preventDefault();
            this.displayHideMenu();
            Backbone.history.navigate('categories', {trigger:true, replace:false});
        }
    });

    return MenuView;
});