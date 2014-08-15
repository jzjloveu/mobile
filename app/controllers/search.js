import Ember from 'ember';
var SearchController = Ember.ArrayController.extend({
	queryParams: ['keyword'],
	keyword:'',
	/*
	actions:{
		reset:function(){
			var detailController = this.controllerFor('list');
			detailController.count = 2;
			alert(detailController.count);
		}
	}
	*/
});

export default SearchController;