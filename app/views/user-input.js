import Ember from 'ember';

var UserInputView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  }
});

export default UserInputView;