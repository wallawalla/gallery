/**
 * Event Manager singleton
 * Dependencies: backbone, underscore
 */
/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var EventsManager = function () {

        if (EventsManager.prototype._singletonInstance) {
            return EventsManager.prototype._singletonInstance;
        }

        var self = this;

        if (typeof self === 'undefined') {
            self = new EventsManager();
        }

        EventsManager.prototype._singletonInstance = self;

        self.events = _.extend({}, Backbone.Events);
    };

    return new EventsManager();
});