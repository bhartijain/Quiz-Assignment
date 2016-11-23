/*globals define*/
define([
    'exports',
    'backbone'
], function (
    exports,
    Backbone
) {
    'use strict';
    exports.QuizModel = Backbone.Model.extend({
        defaults: {
            id: '',
            question: '',
            choices: '',
            correctAnswer: '',
            selectedAnswer: '',
            score: ''
        }
    });
});