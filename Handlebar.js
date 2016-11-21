/*define([
	'handlebar'
	],function(
			Handlebar
		){
			'use strict';
			Handlebar.registerHelper('equal', function(selectedAnswer, index, opts)
			 {
			 	console.log("selectedAnswer " + selectedAnswer);
			 	console.log("index = " +index);
				if(selectedAnswer != index) 
					  return opts.fn(this);
				else
					return opts.inverse(this);
			});
});*/