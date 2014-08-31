import Ember from "ember";
 
export default Ember.Handlebars.makeBoundHelper(function(val1, val2, options) {
    if(val1===val2){
       return '✖';        
    }
});