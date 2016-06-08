import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    save1() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        author: this.get('author') ? this.get('author') : "",
        body: this.get('body') ? this.get('body') : ""
      };
      this.set('updatePostForm', false);
      this.sendAction('save2', params);
      this.set('title', "");
      this.set('author', "");
      this.set('body', "");
    }
  }
});
