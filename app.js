/*globals define, $*/
define([
    'exports',
    'backbone',
    'marionette',
    'route',
    'view/mainLayout'
], function (
    exports,
    Backbone,
    Marionette,
    Route,
    MainLayout
) {
    'use strict';
    var thisModule = this;
    exports.QuizSystem = new Marionette.Application();

    thisModule.QuizSystem.on("start", function () {
        MainLayout.layout.render();
        exports.router = new Route.Router();
        Backbone.history.start();
    });

    thisModule.QuizSystem.start();
});
