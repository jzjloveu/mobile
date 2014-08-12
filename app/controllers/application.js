import Ember from 'ember';
var ApplicationController = Ember.ArrayController.extend({
	input: '',
	actions: {
		search: function() {
			//alert(this.get('input'));
			this.transitionTo('search', {queryParams: {keyword: this.get('input')}});
		}
	}
});

export default ApplicationController;