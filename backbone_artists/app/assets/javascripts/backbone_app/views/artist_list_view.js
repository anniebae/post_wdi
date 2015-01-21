console.log("ArtistListView required...");
var ArtistListView = Backbone.View.extend({
  tagName: 'ul',
  template: _.template($('#artist-list-item-template').html()),
  render: function() {
    this.$el.html("");
    var renderedHTML = this.template({collection: this.collection});
    this.$el.html(renderedHTML);
    return this;
  }
});