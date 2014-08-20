import Ember from 'ember';

var ListRoute = Ember.Route.extend({
	model: function(controller) {
		var self = this;  
		return  Ember.$.ajax({
			      url: 'http://localhost:3000/comment/get',
			      data:  {
			      	dishId: self.controllerFor('detail').dishId
			      },
			      type: 'POST',
			      success: function(data) {
			      	return data;
			      }
	       });
	},
});

export default ListRoute;