define([
	'jquery',
	'exports',
	'underscore',
	'backbone',
	'marionette',
	'handlebar',
	'../route'
	], function(
		$,
		exports,
		_,
		Backbone,
		Marionette,
		Handlebar,
		Route
	){
		'use strict';
		
		exports.QuestionView = Marionette.ItemView.extend({
			initialize : function(){
				var that = this;
				this.listenTo(this.model, 'change', this.render);
			},

			render : function(){
					Handlebar.registerHelper('selectedChoice', function(selectedAnswer, index, opts)
					 {
						if(parseInt(selectedAnswer) === index) 
							  return opts.fn(this);
						else
							return opts.inverse(this);
					});
					
					var data = this.model.attributes;
				 	var context = {
					 			"index" : data.id,
					 			"question" : data.question,
					 			"correctAnswer" : data.correctAnswer,
					 			"choices" : data.choices,
					 			"selectedAnswer" : data.selectedAnswer
					};

					var theTemplateScript = $("#question-template").html();
					this.theTemplate = Handlebar.compile(theTemplateScript);
					var theCompiledHtml = this.theTemplate(context);
					this.$el.html(theCompiledHtml);
				
				return this;
			},

			events:{
				'click .choice' : "selectAnswer"
			},

			selectAnswer : function(e){
					var selectedAnswer = $('input[name=choice]:checked').val();
					var data = this.model.attributes;
					var score = 0;
					if(data.correctAnswer == selectedAnswer){
						data.score = 1;
						score = 1;
					}
					this.collection.models[data.id].attributes.score = score;
					this.collection.models[data.id].attributes.selectedAnswer = selectedAnswer;
					this.model.set({selectedAnswer : selectedAnswer, score : score});
			}
		});
});