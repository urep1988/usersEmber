import Ember from 'ember';

export default Ember.Service.extend({
	users: null,

  init() {
    this._super(...arguments);
    this.set('users', []);
  },

  add(user) {
  	if (this.get('users').every(function(id) {return id != user;})) {
	    this.get('users').push(user);
	  }
  },

  remove(user) {
  	let users = this.get('users');
  	users.forEach(function (userId, i) {
  		if (userId == user) {
  			users.splice(i, 1)
  		}
  	});
    this.set('users', users);
  },
});
