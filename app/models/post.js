import Model from 'ember-data/model';
import attr from 'ember-data/attr';


export default Model.extend({
  title:  attr(),
  author: attr(),
  body: attr()
});
