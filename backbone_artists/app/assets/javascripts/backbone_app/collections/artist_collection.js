console.log("ArtistCollection required...");

var ArtistCollection = Backbone.Collection.extend({
  model: Artist,
  url: '/artists'
});