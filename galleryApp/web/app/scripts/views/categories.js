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

    var CategoriesView = Backbone.View.extend({
        template: JST['app/scripts/templates/categories.ejs'],
        templateCat: JST['app/scripts/templates/tmp_category.ejs'],

        el: '#main',

        events: {
            'click #catNavMenu' : 'displayMenu'
        },

        initialize: function () {},

        render: function () {
            this.$el.html(this.template());
            this.displayCategories();
        },

        displayMenu: function () {
            EventsManager.events.trigger('menu:display');
        },

        displayCategories: function () {
            var self = this,
                categories = AppData.get('categoriesCollection'),
                catList = $('.categories');

            _.each(categories.models, function(cat) {
                catList.append(self.templateCat(cat.toJSON()));
            });
        }
    });

    return CategoriesView;
});
