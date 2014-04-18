/*global define*/

define([
    'underscore',
    'backbone',
    'eventsmanager'
], function (_, Backbone, EventsManager) {
    'use strict';

    var CategorieModel = Backbone.Model.extend({
        defaults: {
        },

        initialize: function() {
            EventsManager.events.on('model:change', this.setCategories, this);
        },

        initCat: function (title, src) {
            this.set('title', title);
            this.set('src', src);
        }
    });

    return CategorieModel;
});