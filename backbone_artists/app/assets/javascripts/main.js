var artistCollection = new ArtistCollection(),
router;

artistCollection.fetch().done(function(){
  router = new Router({
    collection: artistCollection,
    $el: $('.artists')
  });
  Backbone.history.start();
});