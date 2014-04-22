/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'eventsmanager'
], function ($, _, Backbone, JST, EventsManager) {
    'use strict';

    var GalleryView = Backbone.View.extend({
        template: JST['app/scripts/templates/gallery.ejs'],

        el: '#main',

        events: {
            'click #galleryNavMenu' : 'displayMenu',
            'click #galleryNavBack' : 'goBack'
        },

        initialize: function () {},

        render: function (catname) {
            this.$el.html(this.template({
                'catname': catname
            }));
        },

        displayMenu: function () {
            EventsManager.events.trigger('menu:display');
        },

        goBack: function () {
            window.history.back();
        }
    });

    return GalleryView;
});