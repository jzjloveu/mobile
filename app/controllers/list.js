import Ember from 'ember';
var ListController = Ember.ArrayController.extend({
	adminUser:function(){
		return sessionStorage.getItem("username");
	}.property(),

	deleteComment:function(id){
		$.ajax({
	    //search the data on DB
	      url: globalAddress + 'comment/delete',
	      data:  {
	        "_id": id
	      },
	      type: 'POST',
	      success: function(data) {
	      	$('#'+id).remove();
	      }
	    });
	    
	},
	
});

export default ListController;