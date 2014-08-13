import Ember from 'ember';

var ListRoute = Ember.Route.extend({
	model: function() {
		var test = [
		  {
		  	username: "Jeff",
		  	commentTime: "Jun. 26, 2014",
		  	rate: 4,
		  	comment: "Great!"
		  },
		  {
		  	username: "Jeff",
		  	commentTime: "Jun. 26, 2014",
		  	rate: 4,
		  	comment: "Great,These is the best dish I have ever ate!These is the best dish I have ever ate!"
		  },
		  {
		  	username: "Jerry",
		  	commentTime: "Jun. 27, 2014",
		  	rate: 3,
		  	comment: "Delicious!"
		  },
		  {
		  	username: "Huanxin",
		  	commentTime: "Jun. 26, 2014",
		  	rate: 4,
		  	comment: "Great!"
		  },
	    ];
		return test;
	}
});

export default ListRoute;