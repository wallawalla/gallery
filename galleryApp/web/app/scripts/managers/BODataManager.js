/*global define*/
/**
 * BO Data Manager
 * @author  Matthieu Lacrampe
 * @date 03/04/14
 * Manages initialisation for localizations & countrySpecs
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
    };

    /**
     * Loads categories from JSON and fill categorieCollection
     */
    BODataManager.prototype.initCategories = function () {
        $.ajax({
            url: 'data/categories.json',
            dataType: 'JSON',
            success: function (data) {
                if (data) {
                    EventsManager.events.trigger('categories:change', data);
                    EventsManager.events.trigger('approuter:start');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                window.alert(textStatus);
                window.console.log('error', jqXHR, textStatus, errorThrown);
            }
        });
    };

    return new BODataManager();
});
