/*global define, FastClick*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'eventsmanager',
    'appdata',
    'isotope',
    'libs'
], function ($, _, Backbone, JST, EventsManager, AppData) {
    'use strict';

    var CategoriesView = Backbone.View.extend({
        template: JST['app/scripts/templates/categories.ejs'],
        templateCat: JST['app/scripts/templates/tmp_category.ejs'],

        el: '#main',

        events: {
            'click #catNavMenu' : 'displayMenu',
            'click .categories li a img' : 'goToGallery',
            'click .categories li a span' : 'goToGallery'
        },

        initialize: function () {},

        render: function () {
            this.$el.html(this.template());
            this.displayCategories();
            FastClick.attach(document.getElementById('categories'));
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
        },

        goToGallery: function (evt) {
            evt.preventDefault();
            Backbone.history.navigate($(evt.target).parent().attr('href'), {trigger:true, replace:false});
        }
    });

    return CategoriesView;
});