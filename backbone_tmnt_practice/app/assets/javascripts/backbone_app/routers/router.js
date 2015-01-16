var Router = Backbone.Router.extend({
  initialize: function(options) {
    this.collection = options.collection;
    this.$el = options.$el;
  },
  routes: {
    ""            : "index",
    "turtles"     : "index",
    "turtles/:id" : "show",
    "turtles/new" : "new",
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
    var view = new TurtleListView({
      collection: this.collection
    });
    this.setView(view);
  },
  show: function(id) {
    var turtle = this.collection.find(function(turtle){
      return turtle.get('id') === parseInt(id);
    })
    var view = new TurtleProfileView({
      model: turtle
    });
    this.setView(view);
  },
  new: function(){

  }
});