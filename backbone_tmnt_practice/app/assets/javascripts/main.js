var turtleCollection = new TurtleCollection(),
  router;

turtleCollection.fetch().done(function(){
  router: new Router({
    collection: turtleCollection,
    $el: $('.turtles')
  });
  Backbone.history.start();
})