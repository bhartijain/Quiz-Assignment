/*globals define*/
define([
    'exports',
    'backbone',
    '../model/questionModel'
], function (
    exports,
    Backbone,
    QuizModel
) {
    'use strict';

    exports.QuestionCollection = Backbone.Collection.extend({
        model: QuizModel.QuizModel
    });
    exports.allQuestions = new this.QuestionCollection([
        {
            id: 0,
            question: "Who is Prime Minister of the United Kingdom?",
            choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
            correctAnswer: 0
        },
        {
            id: 1,
            question: "What is not vegitable?",
            choices: ["Potato", "Tomato", "Chilli", "Apple"],
            correctAnswer: 3
        },
        {
            id: 2,
            question: "What is not a fruit?",
            choices: ["Apple", "Banana", "Orange", "Potato"],
            correctAnswer: 3
        }
    ]);

});
