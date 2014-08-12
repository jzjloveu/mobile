import Ember from 'ember';

var Router = Ember.Router.extend({
  location: IFoodAppENV.locationType
});

Router.map(function() {
	this.route('home');
	this.route('search', { path: '/home/search' });
	this.route('detail');
});

export default Router;
