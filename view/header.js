/*globals define,alert*/
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
    exports.HeaderView = Marionette.ItemView.extend({
        initialize: function () {
            var fiveMinutes = 60 * 1;
            this.startTimer(fiveMinutes);
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            var id = this.model.attributes.id + 1;
            var context = {
                Index: id
            };
            var theTemplateScript = $("#header-template").html();
            var theTemplate = Handlebar.compile(theTemplateScript);
            var theCompiledHtml = theTemplate(context);
            $(this.el).html(theCompiledHtml);
        },
        startTimer: function (duration) {
            var that = this;
            var timer = duration, minutes, seconds;
            exports.timerId = setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                $('#countDown').html(minutes + ":" + seconds);
                timer = timer - 1;
                if (timer < 0) {
                    $('#timer').html("Time Out");
                    alert("Your time Up");
                    clearInterval(that.timerId);
                    that.displayScore();
                }
            }, 1000);
        },

        displayScore: function () {
            App.router.navigate('score', {trigger: true});
        }
    });
});