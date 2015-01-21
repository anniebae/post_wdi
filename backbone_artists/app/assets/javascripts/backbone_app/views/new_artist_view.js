var NewArtistView = Backbone.View.extend({
  className: "artist-form",
  template: _.template($("#new-artist-view-template").html()),
  events: {
    "submit" : "createArtist"
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  },
  createArtist: function(e){
    e.preventDefault();
    artistCollection.create({
      name: this.$("input[name='name']").val(),
      age: this.$("input[name='age']").val(),
      style: this.$("input[name='style']").val(),
      image_url: this.$("input[name='image_url']").val(),
    });
    router.navigate('artists', { trigger: true })
  }
});