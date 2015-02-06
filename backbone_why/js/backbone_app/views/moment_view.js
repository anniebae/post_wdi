console.log("Moment view");

var MomentView = Backbone.View.extend({
  el: '#phrase',
  template: _.template($('#phrase-template').html()),
  events: {
    "click #dbl-exclimation" : "nextMoment",
  },
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  nextMoment: function() {
    allMoments = momentsCollection.models;
    counter = this.model.get('id');
    console.log('counter', counter);
    idOfNextModel = (counter + 1);
      if (idOfNextModel > 8) {
        idOfNextModel = 1;
      }
    newMoment = _.findWhere(allMoments, {id: idOfNextModel});
    momentInTime = moment.set(newMoment.attributes);
    new MomentView({
      model: momentInTime
    });
  },
});