import Ember from 'ember';

export default Ember.Component.extend({
  userFriends: Ember.inject.service(),
  isShowAdd: true,

  actions: {
    add(friend) {
    	this.set('isShowAdd', false);
      this.get('userFriends').add(friend);
    },
    remove(friend) {
    	this.set('isShowAdd', true)
      this.get('userFriends').remove(friend);
    },
  }
});