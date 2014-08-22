import Ember from 'ember';
var SearchController = Ember.ArrayController.extend({
	queryParams: ['keyword'],
	keyword:'',
	category: ''
});

export default SearchController;