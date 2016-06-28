var Cat = Backbone.Model.extend({
  defaults: {
    name: "",
    age: 0
  }
});

var CatCollection = Backbone.Collection.extend({
  model: Cat,
  comparator: function(model) {
    return model.get('name');
  }
});

var catCollection = new CatCollection();
catCollection.push(new Cat({name: "Mister Whiskers", age: 12}))
catCollection.push(new Cat({name: "Fluffy the Second", age:15}))



// Show a collection
// model
// forEach

// Push
// Add

// initialize with an array

// sort
// comparator
// filter

// var Cat = Backbone.Model.extend({
//   defaults: {
//     name: "",
//     age: ""
//   }
// });

// var CatCollection = Backbone.Collection.extend({
//   model: Cat,
//   comparator: function (model) {
//     return model.get('name');
//   }
// });

var collection = new CatCollection();
// collection.add(new Cat({
//   name: "Dan",
//   age: 18
// }));
