var TurtleProfileView = Backbone.View.extend({
  className: 'profile',
  template: _.template($('#turtle-profile-template').html()),
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
})