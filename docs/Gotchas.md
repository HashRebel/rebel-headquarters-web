# Notes/Gotchas/Open Questions

This README will document any gotchas I have found along the way which may help future developers.

## Vue.js

### Notes

* List of properties for the Vue Object
  * **el**: Connect to DOM
  * **data**: Store Data to be used
  * **methods**: Methods of this Vue instance
    * they will always be run when the DOM is updated
  * **computed**: Dependent properties
    * Will only be run when the DOM is updated if they are operating on a data property.
    * Highly efficient but can only handle synchronous tasks.
  * **watch**: Execute code upon data change.
    * Is executed when a change occurs to data. Must match a data property.
    * Allows for asynchronous calls to be executed when the data property that the watch is bound to is updated.
* Whenever the data object in the Vue object is update, Vue re-renders the page. As far as I understand, this is causes the methods to be rerun as well. This can be bad if the methods are expensive. The ```computed``` property will help with that. It will look at all the properties inside and only rerun the property if it has a data property that has been updated
* ```methods``` will always run every time the dom gets updated. ```Compute```

* Shorthand for ```v-on``` and ```v-bind``` is as follows:

```html
<div id"app">
  <button v-on:click="foo"  v-bind:hoover="bar">Original notation</button>
  <button @:click="foo" :hoover="bar">Shorthand notation</button>
</div>
```

### Questions

* _What does that '#' mean in this case or more generally in HTML. In links ```<a href="">``` the # means to stay in the current directive. You can use it to reference (or in the case of link; link to) a different directive via id.

### Got'chas

* The el attribute requires the #. Looking for good documentation to explain this.
* You cannot get access to this from inside an enclosed function. In other words functions within a function are scoped different so you need to create a local variable in order to access it
* _Don't forget your ```this.```!_ In the vue object you need to use the this keyword to access data properties (and methods and what not).

```javascript
new Vue
{
  methods:
  {
    counter: function() {
      var vm = this;
      setTimeout(function() { // this is a different scope and does not have access to the this variable.
        vm.something
      })
    }
  }
}
```
