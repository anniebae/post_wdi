var Router = Backbone.Router.extend({
  initialize: function(options) {
    this.collection = options.collection;
    this.$el = options.$el;
  },

  routes: {
    ""            : "index",
    "artists"     : "index",
    "artists/new" : "new",
    "artists/:id" : "show",
    "*default"    : "index"
  },

  setView: function(view){
    if (this.view) {
      this.view.remove();
      this.view = null;
    }
    this.view = view;
    this.$el.html(this.view.render().$el);
  },
  index: function() {
    var view = new ArtistListView({
      collection: this.collection
    });
    this.setView(view);
  },
  show: function(id) {
    var artist = this.collection.find(function(artist){
      return artist.get('id') === parseInt(id);
    })
    var view = new ArtistProfileView({ model: artist });
    this.setView(view);
  },
  new: function() {
    console.log("new route hit");
    var view = new NewArtistView();
    this.setView(view);
  }
});