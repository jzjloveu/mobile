import Ember from 'ember';

var NewRoute = Ember.Route.extend({
	beforeModel: function() {
		if(!sessionStorage.getItem("loginState")){
			this.transitionTo('login');
		}
	},
});

export default NewRoute;

