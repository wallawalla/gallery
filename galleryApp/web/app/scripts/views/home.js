/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'eventsmanager'
], function ($, _, Backbone, JST, EventsManager) {
    'use strict';

    var HomeView = Backbone.View.extend({
        template: JST['app/scripts/templates/home.ejs'],

        el : '#main',

        events: {
            'click #homeNavMenu' : 'displayMenu'
        },

        initialize: function () {},

        render: function () {
            this.$el.html(this.template());
        },

        displayMenu: function () {
            EventsManager.events.trigger('menu:display');
        }
    });

    return HomeView;
});