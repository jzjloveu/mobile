import Ember from 'ember';
var ListController = Ember.ArrayController.extend({
	
	readMoreList:function(){
		return this.get('model');
	}.property(),
	count:2,
	step:2,
	addCount:function(){
		var count = this.get('count');
		count = count + this.get('step');
		this.set('count',count);
		//return	this.set('count',this.get('count')+1); 
	},
	actions: {

		readMore: function(){
			this.addCount();
			//alert(this.get('count'));
			this.set('readMoreList',this.get('model').slice(0,this.get('count')));
		},
	},
	
});

export default ListController;