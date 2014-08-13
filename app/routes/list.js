import Ember from 'ember';

var ListRoute = Ember.Route.extend({
	model: function() {
		var test = [
		  {
		  	username: "Jeff",
		  	commentTime: "Jun. 26, 2014",
		  	rate: 4,
		  	comment: "Great!"
		  }
	    ];
		return test;
	}
});

export default ListRoute;