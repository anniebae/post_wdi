console.log("Moments collection");

var MomentsCollection = Backbone.Collection.extend({
  model: Moment,
  url: '/'
});