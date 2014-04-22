/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ImgModel = Backbone.Model.extend({
        defaults: {
            title:null,
            id:null,
            src:null,
            description:null,
            author:null,
            categories:[]
        },

        initialize: function() {},

        initImg: function (item) {
            var self = this;
            this.set('title', item.title);
            this.set('id', item.id);
            this.set('src', item.src);
            this.set('description', item.description);
            this.set('author', item.author);
            this.set('categories', []);
            _.each(item.categories, function (cat) {
                self.get('categories').push(cat);
            });
        }
    });

    return ImgModel;
});