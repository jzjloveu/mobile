import Ember from 'ember';
var ApplicationController = Ember.ArrayController.extend({
	actions: {
		search: function(input) {
			this.transitionTo('search', {queryParams: {keyword: input}});
		},
		
		logout:function(){
			sessionStorage.clear();
			this.controllerFor('login').reset();
			this.transitionTo('login');
		}
	}
	
});

export default ApplicationController;