/*globals define*/
define([
    'exports',
    'backbone',
    'view/start',
    'view/mainLayout',
    'view/score',
    'view/header',
    'view/questionBody',
    'view/footer',
    'model/questionModel',
    'collection/questionCollection'
], function (
    exports,
    Backbone,
    Start,
    MainLayout,
    Score,
    Header,
    QuestionBody,
    Footer,
    QuizModel,
    QuestionCollection
) {
    'use strict';
    exports.Router = Backbone.Router.extend({
        routes: {
            "": "start",
            home: "home",
            score: "score"
        },
        start: function () {
            MainLayout.layout.body.empty();
            MainLayout.layout.footer.empty();
            MainLayout.layout.header.show(new Start.StartView());
        },
        home: function () {
            MainLayout.layout.header.empty();
            var quizModel = new QuizModel.QuizModel();
            MainLayout.layout.header.show(new Header.HeaderView({model: quizModel, collection: QuestionCollection.allQuestions}));
            MainLayout.layout.body.show(new QuestionBody.QuestionView({model: quizModel, collection: QuestionCollection.allQuestions}));
            MainLayout.layout.footer.show(new Footer.FooterView({collection: QuestionCollection.allQuestions, model: quizModel}));
            quizModel.set(QuestionCollection.allQuestions.get(0).toJSON());
        },

        score: function () {
            MainLayout.layout.header.empty();
            MainLayout.layout.footer.empty();
            MainLayout.layout.body.show(new Score.ScoreView());
        }
    });

});