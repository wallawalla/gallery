/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'eventsmanager',
    'appdata'
], function ($, _, Backbone, JST, EventsManager, AppData) {
    'use strict';

    var DetailsView = Backbone.View.extend({
        template: JST['app/scripts/templates/details.ejs'],

        el: '#main',

        events: {
            'click #detailsNavMenu' : 'displayMenu',
            'click #detailsNavBack' : 'goBack',
            'click #detailsNavDownload' : 'downloadImg'
        },

        initialize: function () {},

        render: function (id) {
            this.image = _.find(AppData.get('imgCollection').models, function (item) {
                return item.get('id') === id;
            });
            this.$el.html(this.template(this.image.toJSON()));
        },

        displayMenu: function () {
            EventsManager.events.trigger('menu:display');
        },

        downloadImg: function (evt) {
            evt.preventDefault();
        },

        goBack: function (evt) {
            evt.preventDefault();
            window.history.back();
        }
    });

    return DetailsView;
});