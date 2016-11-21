define([
	'jquery',
	'exports',
	'underscore',
	'backbone',
	'marionette',
	'handlebar',
	'../mainLayout',
	'./header',
	'./questionBody',
	'./footer',
	'../model/questionModel'
	], function(
		$,
		exports,
		_,
		Backbone,
		Marionette,
		Handlebar,
		MainLayout,
		Header,
		QuestionBody,
		Footer,
		QuizModel
	){
		'use strict';

		var HomeCollection = Backbone.Collection.extend({
			model : QuizModel.QuizModel
		});

		exports.HomeView = Marionette.ItemView.extend({
			render : function(){
					var newModel = new QuizModel.QuizModel();
					MainLayout.layout.header.show(new Header.HeaderView({model : newModel, collection : allQuestions}));
					MainLayout.layout.body.show(new QuestionBody.QuestionView({model : newModel, collection : allQuestions}));
					MainLayout.layout.footer.show(new Footer.FooterView({collection : allQuestions, model : newModel}));
					newModel.set(allQuestions.get(0).toJSON());
			}
		});

		
		var allQuestions = new HomeCollection([
			{
				id : 0,
				question: "Who is Prime Minister of the United Kingdom?", 
				choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], 
				correctAnswer:0
			},
			{
				id : 1,
				question: "What is not vegitable?", 
				choices: ["Potato", "Tomato", "Chilli", "Apple"], 
				correctAnswer:3
			},
			{
				id : 2,
				question: "What is not a fruit?", 
				choices: ["Apple", "Banana", "Orange", "Potato"], 
				correctAnswer:3
			}
		]);
});