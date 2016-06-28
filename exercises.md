# Collections!

Collections are lists of models. You can sort them, iterate over them, push and pop. They spit out events when you change them, just as you would hope.


## Reading

Review the events catalog here: <http://backbonejs.org/#Events-catalog>. Specifically check out the events relating to collections.

## Exercise

1. Create a collection to hold your models. If you have a Cat model, create a CatCollection. Refer to the reading if you are stuck.
2. Make sure you set the model attribute on your collection to tell it what type of model it contains.
3. Create a CatList view (assuming you have a cat model)
4 The catList View instance should have a collection attribute that points to the cat collection
5. The CatList view should have a render method which uses forEach to iterate over the collection adding the model name attribute to a string.
6. In the render method, use $el.html() to put the string you have composed in the DOM.
7. Use view.listenTo(collection, 'all', functionName) to have your CatList view listen to the collection and call render when it changes.

Test your app. Use the console to create Cats, and push them into the collection. Your DOM should update automagically.


## Extensions

Add a metadata view which shows the total number of cats in the collection, and when the collection was last updated.

Define a comparator to sort alphabetically by name

Add buttons to sort your collection by name and age using the sortBy method.

Add a search button to filter models that have a specific name.


## Reading

Read about Backbone collections here

<http://backbonejs.org/#Collection>


## Further reading

Backbone collections gain access to the full might of the Underscore collections library, providing modern, functional style array and collection handling. Have a skim through the methods available to you.

<http://underscorejs.org/#collections>

Pay special attention to:

* each (forEach): <http://underscorejs.org/#each>
* map: <http://underscorejs.org/#map>
* find: <http://underscorejs.org/#find>
* sortBy: <http://underscorejs.org/#sortBy>
* filter: <http://underscorejs.org/#filter>

If you're not used to functional programming, some of these ideas may be new to you.
