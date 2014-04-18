/*global define*/

define([
    'underscore',
    'backbone',
    'models/categorieModel'
], function (_, Backbone, CategorieModel) {
    'use strict';

    var CategoriesCollection = Backbone.Collection.extend({
        model: CategorieModel
    });

    return CategoriesCollection;
});