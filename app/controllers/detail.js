import Ember from 'ember';
var DetailController = Ember.Controller.extend({
	queryParams: ['dishId'],
	dishId:'',
	showReviews: true,
	actions:{
		/*
		clear:function(){
			$('textarea').val("");
		},
		submit:function(){
			var comment = $('textarea').val();
			$('textarea').val("");
			alert(comment);
		}
		*/
	    // Toggle reviews button.
	    toggleReviews: function() {
	      this.set('showReviews', !this.get('showReviews'));
	    },
	},

});

export default DetailController;