import Ember from 'ember';
var DetailController = Ember.Controller.extend({
	queryParams: ['dishId'],
	dishId:'',
	showReviews: true,
	actions:{
	    toggleReviews: function() {
	      this.set('showReviews', !this.get('showReviews'));
	    },
	},

});

export default DetailController;