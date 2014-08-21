import Ember from 'ember';

var Router = Ember.Router.extend({
  location: IFoodAppENV.locationType
});

Router.map(function() {
	this.route('home');
	this.route('new', {	path:'/new'});
	this.resource('home', function() {
		this.resource('category');
	});
	this.route('search', { path: '/home/search' });
	this.resource('detail', function() {
		this.resource('list');
		this.resource('comments');
	})
});

export default Router;
