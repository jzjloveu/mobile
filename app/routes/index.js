import Ember from 'ember';

var IndexRoute = Ember.Route.extend({
	beforeModel: function(transition) {
		this.transitionTo('login');
	},
});

export default IndexRoute;