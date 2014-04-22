/*global define*/

define([
    'underscore',
    'backbone',
    'eventsmanager',
    'models/categorieModel',
    'models/imgModel',
    'collections/categories',
    'collections/images'
], function (_, Backbone, EventsManager, CategorieModel, ImgModel, CategoriesCollection, ImgCollection) {
    'use strict';

    var AppDataModel = Backbone.Model.extend({
        defaults: {
            categoriesCollection: null,
            imgCollection: null
        },

        initialize: function () {
            this.set('categoriesCollection', new CategoriesCollection());
            this.set('imgCollection', new ImgCollection());
            EventsManager.events.on('categories:change', this.setCategories, this);
            EventsManager.events.on('images:change', this.setImg, this);
        },

        setCategories: function (catJSON) {
            var self = this;
            _.each(catJSON, function (item) {
                var model = new CategorieModel();
                model.initCat(item);

                self.get('categoriesCollection').add(model);
            });
        },

        setImg: function (imgJSON) {
            var self = this;

            _.each(imgJSON, function (item) {
                var model = new ImgModel();
                model.initImg(item);

                self.get('imgCollection').add(model);
            });
        }
    }, {
        getInstance: function () {
            if (this._instance === undefined) {
                this._instance = new AppDataModel();
            }
            return this._instance;
        }
    });

    return AppDataModel.getInstance();
});