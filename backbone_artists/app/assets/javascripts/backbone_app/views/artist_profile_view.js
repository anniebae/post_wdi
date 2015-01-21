console.log("Artist ProfileView required...");

var ArtistProfileView = Backbone.View.extend({
  className: 'profile',
  template: _.template($('#artist-profile-template').html()),
  events: {
    "blur input"    : "update",
    "keydown input" : "blurInput"
  },
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  update: function(){
    var style = this.$('input.style').val();
    this.model.save({
      style: style
    }, { patch: true });
  },
  blurInput: function(e){
    if (e.keyCode === 13){
      $(e.target).blur();
    }
  }
});