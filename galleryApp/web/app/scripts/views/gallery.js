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

    var GalleryView = Backbone.View.extend({
        template: JST['app/scripts/templates/gallery.ejs'],
        templateImg: JST['app/scripts/templates/tmp_image.ejs'],

        el: '#main',

        events: {
            'click #galleryNavMenu' : 'displayMenu',
            'click #galleryNavBack' : 'goBack',
            'click .list-images li a' : 'goToDetails',
            'click .list-images li span' : 'goToDetails'
        },

        initialize: function () {},

        render: function (catname) {
            var self = this;

            this.categorie = _.find(AppData.get('categoriesCollection').models, function (item) {
                return item.get('name') === catname;
            });
            this.$el.html(this.template({
                'title': self.categorie.get('title')
            }));
            this.fetchCatImg();
        },

        displayMenu: function () {
            EventsManager.events.trigger('menu:display');
        },

        fetchCatImg: function () {
            var self = this,
                imgList = $('.list-images');

            _.each(AppData.get('imgCollection').models, function (item) {
                if($.inArray(self.categorie.get('name'), item.get('categories')) === -1) {
                    return true;
                }

                imgList.append(self.templateImg(item.toJSON()));
                // catList.append(self.templateCat(cat.toJSON()));
            });
        },

        goToDetails: function (evt) {
            evt.preventDefault();
            Backbone.history.navigate($(evt.target).parent().attr('href'), {trigger:true, replace:false});
        },

        goBack: function (evt) {
            evt.preventDefault();
            window.history.back();
        }
    });

    return GalleryView;
});