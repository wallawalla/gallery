/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var CategorieModel = Backbone.Model.extend({
        defaults: {
        },

        initialize: function() {},

        initCat: function (item) {
            this.set('name', item.name);
            this.set('src', item.src);
            this.set('title', item.title);
        }
    });

    return CategorieModel;
});