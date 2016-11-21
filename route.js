define([
	'jquery',
	'exports',
	'underscore',
	'backbone',
	'view/start',
	'view/home',
	'./mainLayout',
	'view/score'
		], function(
				$,
				exports,
				_,
				Backbone,
				Start,
				Home,
				MainLayout,
				Score
				){
		'use strict';
		exports.Router = Backbone.Router.extend({
			routes : {
				"": "start",
				"home": "home",
				"score" : "score"
			},
		
			start : function(){
				MainLayout.layout.body.empty();
				MainLayout.layout.footer.empty();
				MainLayout.layout.header.show(new Start.StartView());
			},

			home: function(){
				MainLayout.layout.header.empty();
				var HomeView = new Home.HomeView();
				HomeView.render();
			},

			score : function(){
				MainLayout.layout.header.empty();
				MainLayout.layout.footer.empty();
				MainLayout.layout.body.show(new Score.ScoreView());
			}
	});

});