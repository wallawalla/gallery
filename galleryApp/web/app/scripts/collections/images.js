/*global define*/

define([
    'underscore',
    'backbone',
    'models/imgModel'
], function (_, Backbone, ImgModel) {
    'use strict';

    var ImagesCollection = Backbone.Collection.extend({
        model: ImgModel
    });

    return ImagesCollection;
});