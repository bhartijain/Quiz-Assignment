define([
	'jquery',
	'exports',
	'backbone',
	'marionette',
	'route',
	'./mainLayout'
	
	],function($,
				exports,
				Backbone,
				Marionette,
				Route,
				MainLayout
				){
		var thisModule = this;
		exports.QuizSystem = new Backbone.Marionette.Application();
		
		thisModule.QuizSystem.on("start", function(){
			MainLayout.layout.render();
			
			exports.router = new Route.Router();
			Backbone.history.start();
		});
		
		thisModule.QuizSystem.start();
	});