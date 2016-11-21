define([
	'jquery',
	'exports',
	'underscore',
	'backbone'
	], function(
		$,
		exports,
		_,
		Backbone
	){
		'use strict';
		exports.QuizModel = Backbone.Model.extend({
			defaults: {
				"id" : '',
				"question" : '',
				"choices" : '',
				"correctAnswer" : '',
				"selectedAnswer" : '',
				"score" : '',
			}
		});
});