/*global define*/

define([
    'underscore',
    'backbone',
    'eventsmanager',
    'models/categorieModel',
    'collections/categories'
], function (_, Backbone, EventsManager, CategorieModel, CategoriesCollection) {
    'use strict';

    var AppDataModel = Backbone.Model.extend({
        defaults: {
            categoriesCollection: null
        },

        initialize: function() {
            this.set('categoriesCollection', new CategoriesCollection());
            EventsManager.events.on('categories:change', this.setCategories, this);
        },

        setCategories: function(catJSON) {
            var self = this;
            _.each(catJSON, function (item) {
                var model = new CategorieModel();
                model.initCat(item.title, item.src);

                self.get('categoriesCollection').add(model);
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