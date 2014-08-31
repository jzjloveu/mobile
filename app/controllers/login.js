import Ember from 'ember';
var LoginController = Ember.Controller.extend({
	username: null,
	password: null,
	//loginState:false,

	actions:{
		login:function(){
			var username = this.get('username'),
				password = this.get('password');
			if(username==='admin' && password==='admin') {
				//this.set('loginState',true);
				loginState = true;
				sessionStorage.setItem("username",username);
				sessionStorage.setItem("loginState", true);
				this.transitionTo('home');
			}else{
				alert('You must type in the right username and password');
			}
		}
	}
});

export default LoginController;