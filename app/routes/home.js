import Ember from 'ember';

var HomeRoute = Ember.Route.extend({
	renderTemplate: function() {
	 this.render('home');
	},
	beforeModel: function() {
		if(sessionStorage.getItem("loginState")){
			this.transitionTo('category', {queryParams: {categoryId: 'Meat'}});
		}else{
			this.transitionTo('login');
		}
	}
});

export default HomeRoute;
