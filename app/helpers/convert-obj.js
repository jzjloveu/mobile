import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper('convert-obj', function(input) {
    var res = [];
    input.forEach(function(item) {
    	res.addObject(item);
    });
    return res;
});