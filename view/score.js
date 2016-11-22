/*globals define*/
define([
    'jquery',
    'exports',
    'underscore',
    'marionette',
    'handlebar',
    'view/header',
    '../collection/questionCollection'
], function (
    $,
    exports,
    _,
    Marionette,
    Handlebar,
    Header,
    QuestionCollection
) {
    'use strict';
    exports.ScoreView = Marionette.ItemView.extend({
        render: function () {
            clearInterval(Header.timerId);
            var sum = 0;
            _.each(QuestionCollection.allQuestions.models, function (object) {
                if (object.attributes.score !== "") {
                    sum = sum + object.attributes.score;
                }
            });
            var finalScore = {
                score: sum
            };
            var theTemplateScript = $("#score-template").html();
            this.theTemplate = Handlebar.compile(theTemplateScript);
            var theCompiledHtml = this.theTemplate(finalScore);
            $(this.el).html(theCompiledHtml);
        }
    });
});