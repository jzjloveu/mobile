import Ember from 'ember';

var NewController = Ember.Controller.extend({
	name: "" ,
	img:  "" ,
	stuff: [] ,
	step:  [] ,
	stuffInput: [true],
	stepInput: [true],

	actions: {
		addStuff: function() {				
			this.stuffInput.pushObject("true");	
		},

		addStep: function() {		
			this.stepInput.pushObject("true");
		},

		saveRecipe: function() {
		
			this.setStep();
			this.setStuff();
			var _isEmpty = this.isEmpty();

			var newdish = {
				dishName :  this.get('name'),
				imageUrl:  this.get('img'),
				ingredients:this.get('stuff'),
				step: 		this.get('step')
			};
			//////PUT newdish, after PUT..... clear all the properties
/*
			if(_isEmpty){
				alert("Your recipe is empty, please input the dish information!");
			}else {
				alert("not Empty, you can save it");
			}
*/
			var category = $('.input:radio[name="category"]:checked').val();
			alert(category);
		}

		
	},

	setStep: function() {
		var step= [];
		var len = this.get('stepInput').length;
		for(var i=0; i<len ; i++){
			step[i]=$('.step')[i].value ;
		}
		this.set('step',step);
	},

	setStuff: function(){
		var stuff = [];
		var len = this.get('stuffInput').length;
		for(var i=0; i<len ; i++){
			var data = $('.stuff')[i].value;
			var att = data.split(',');
		 	stuff[i]={
		 		"i-name" : att[0] ,
				"i-count" : att[1]
			};
		}
		this.set('stuff',stuff);
	},

	isEmpty: function(){
		if((this.get('step')!==null) && (this.get('stuff')!==null ) && (this.get('name')!=='') ){
			return false;
		}else{
			return true;
		}
	}

});

export default NewController;