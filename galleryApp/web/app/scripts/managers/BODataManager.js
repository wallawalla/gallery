/*global define*/
/**
 * BO Data Manager
 * Manages Data Initialization
 */

define([
    'jquery',
    'eventsmanager'
], function ($, EventsManager) {
    'use strict';

    var BODataManager = function () {
        if (BODataManager.prototype._singletonInstance) {
            return BODataManager.prototype._singletonInstance;
        }
        BODataManager.prototype._singletonInstance = this;
    };

    /**
     * Initialize datas for categories
     */
    BODataManager.prototype.initData = function () {
        this.initCategories();
        this.initImages();
    };

    /**
     * Loads categories from JSON and fill categorieCollection
     */
    BODataManager.prototype.initCategories = function () {
        $.getJSON('data/categories.json', function (data) {
            if (data) {
                EventsManager.events.trigger('categories:change', data);
            }
        }).fail(function (error) {
            window.alert(JSON.stringify(error));
            window.console.log('error', error);
        });
    };

    /**
     * Loads images from JSON and fill imgCollection
     */
    BODataManager.prototype.initImages = function () {
        $.getJSON('data/datas.json', function (data) {
            if (data) {
                EventsManager.events.trigger('images:change', data);
                EventsManager.events.trigger('approuter:start');
            }
        }).fail(function (error) {
            window.alert(JSON.stringify(error));
            window.console.log('error', error);
        });
    };

    return new BODataManager();
});