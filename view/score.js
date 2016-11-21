define([
	'jquery',
	'exports',
	'underscore',
	'backbone',
	'marionette',
	'handlebar',
	'../app',
	'view/header'
	], function(
		$,
		exports,
		_,
		Backbone,
		Marionette,
		Handlebar,
		App,
		Header
	){
		'use strict';
		var timer;
		exports.ScoreView = Marionette.ItemView.extend({
			
			render : function(){
				clearInterval(Header.timerId);
				var total = localStorage.getItem('finalScore');
				var finalScore = {
					"score" : total
				}
				var theTemplateScript = $("#score-template").html();
				this.theTemplate = Handlebar.compile(theTemplateScript);
				var theCompiledHtml = this.theTemplate(finalScore);
				this.$el.html(theCompiledHtml);
			}
		});
});