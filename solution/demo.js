/*jslint browser: true*/
/*global Backbone*/

var app = app || {};

$(function () {
  app.Cat = Backbone.Model.extend({
    defaults: {
      name: "",
      age: 0
    }
  });

  app.CatCollection = Backbone.Collection.extend({
    model: app.Cat,
    comparator: function (model) {
      return model.get('name');
    },
    search: function (term) {
      return this.filter(function (e) {
        var name = e.get('name').toLowerCase();
        term = term.toLowerCase();
        return name.indexOf(term) !== -1;
      });
    }
  });

  app.CatCollectionView = Backbone.View.extend({
    el: "#cats",
    initialize: function () {
      this.render(app.catCollection);
    },
    catTemplate: _.template($('#cat-template').html()),
    render: function (cats) {
      var view = this;
      view.$el.empty();
      cats.forEach(function (cat) {
        view.$el.append(view.catTemplate(cat.toJSON()));
      });
    }
  });

  app.CatFormView = Backbone.View.extend({
    el: "#cat-form",
    initialize: function () {
      this.render();
    },
    template: _.template($('#cat-form-template').html()),
    render: function () {
      this.$el.html(this.template());
    },
    events: {
      "submit": "search",
      "keyup": "search"
    },
    search: function (e) {
      e.preventDefault();
      var term = this.$('input').val();
      var results = app.catCollection.search(term);
      app.catCollectionView.render(results);
    }
  });

  app.catCollection = new app.CatCollection();
  app.catCollection.push(new app.Cat({name: "Mister Whiskers", age: 12}));
  app.catCollection.push(new app.Cat({name: "Fluffy the Second", age: 15}));
  app.catCollection.push(new app.Cat({name: "Deeno the Brave", age: 4}));
  app.catCollection.push(new app.Cat({name: "Phil", age: 4}));

  app.catCollectionView = new app.CatCollectionView();
  app.catFormView = new app.CatFormView();
});

