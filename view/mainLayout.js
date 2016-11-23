/*globals define*/
define([
    'exports',
    'marionette'
], function (
    exports,
    Marionette
) {
    'use strict';
    var MainLayout = Marionette.LayoutView.extend({
        el: '#container',
        template: '#main-layout',
        regions: {
            header: "#header-region",
            body: "#body-region",
            footer: "#footer-region"
        }
    });

    exports.layout = new MainLayout();
});