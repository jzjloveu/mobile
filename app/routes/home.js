import Ember from 'ember';

var HomeRoute = Ember.Route.extend({
	renderTemplate: function() {
	 this.render('home');
	}
});

export default HomeRoute;
