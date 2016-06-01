import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  age: DS.attr(),
  sex: DS.attr(),
  email: DS.attr(),
  about: DS.attr(),
  photo: DS.attr()
});
