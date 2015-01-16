console.log("Turtle Collection");

var TurtleCollection = Backbone.Collection.extend({
  model: Turtle,
  url: '/turtles'
})