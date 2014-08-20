import Ember from 'ember';
var ListController = Ember.ArrayController.extend({
	readMoreList:[],
	count:2,
	step:2,

	addCount:function(){
		var count = this.get('count');
		count = count + this.get('step');
		this.set('count',count); 
	},

	actions: {
		readMore: function(){
			this.addCount();
			this.set('readMoreList',this.get('model').slice(0,this.get('count')));
		},
	},
	
});

export default ListController;