/*globals define*/
define([
    'jquery',
    'exports',
    'marionette',
    'handlebar',
    '../app'
], function (
    $,
    exports,
    Marionette,
    Handlebar,
    App
) {
    'use strict';
    exports.FooterView = Marionette.ItemView.extend({
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },
        render: function () {
            var that = this;
            Handlebar.registerHelper('ifcond', function (index, opts) {
                if (parseInt(index) !== 2) {
                    return opts.fn(this);
                } else {
                    return opts.inverse(this);
                }
            });
            var data = this.model.attributes;
            var context = {
                id: data.id,
                question: data.question,
                correctAnswer: data.correctAnswer,
                choices: data.choices,
                selectedAnswer: data.selectedAnswer
            };
            var theTemplateScript = $("#footer-template").html();
            this.theTemplate = Handlebar.compile(theTemplateScript);
            var theCompiledHtml = this.theTemplate(context);
            $(this.el).html(theCompiledHtml);
            setTimeout(function () {
                that.disableButton(data);
            }, 200);
            return this;
        },

        disableButton: function (data) {
            if (data.id == "0") {
                $('.backBtn').attr("disabled", true);
            }
            if (data.selectedAnswer != "") {
                $('.nextBtn').removeAttr("disabled");
            }
            if (data.id == "2") {
                $('.nextBtn').attr("disabled", true);
            }
        },

        nextButton: function (e) {
            var id = e.target.id;
            id = parseInt(id);
            var index = id + 1;
            this.model.set(this.collection.get(index).toJSON());
        },

        backButton: function (e) {
            var id = e.target.id;
            id = parseInt(id);
            var index = id - 1;
            this.model.set(this.collection.get(index).toJSON());
        },

        scoreButton: function () {
            App.router.navigate('score', {trigger: true});
        },
        events: {
            'click .nextBtn': 'nextButton',
            'click .backBtn': 'backButton',
            'click .scoreBtn': 'scoreButton'
        }

    });
});