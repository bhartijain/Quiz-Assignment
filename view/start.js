define([
	'jquery',
	'exports',
	'backbone',
	'marionette',
	'handlebar',
	'../route',
	'../app',
	],function($,
				exports,
				Backbone,
				Marionette,
				Handlebar,
				Route,
				App
				){
		exports.StartView = Marionette.ItemView.extend({
			events : {
				'click #startBtn' : 'startButton'
			},

			render : function(){
				console.log("in start");
				var theTemplateScript = $("#start-template").html();
			  	var theTemplate = Handlebar.compile(theTemplateScript);
				 this.$el.html(theTemplate);
			},

			startButton : function(){
				App.router.navigate("home", {trigger : true });
			}
		});

	});