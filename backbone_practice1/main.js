var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
  model: Song
});

var songs = new Songs([
  new Song({ title: "Song 1"}),
  new Song({ title: "Song 2"}),
  new Song({ title: "Song 3"})
]);

songs.add(new Song({ title: "Song 4", genre: "Jazz", downloads: 110  }), { at: 0 });

songs.push(new Song({ title: "Song 2", genre: "Jazz", downloads: 90 }));