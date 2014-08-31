import Ember from 'ember';

var NewRoute = Ember.Route.extend({
	beforeModel: function() {
		if(!loginState){
			this.transitionTo('login');
		}
	},
});

export default NewRoute;

