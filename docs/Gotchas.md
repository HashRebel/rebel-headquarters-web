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

* Vue basically stories a snapshot of the DOM and re-writes it everything an interaction occurs. In other words, its stores all the html and watches for any changes in the variables used in the html. If a change occurs it will rewrite the html and display to the DOM (it just manipulates the DOM in reality).
  * Really good video detailing this: (here)[https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/t/lecture/5942244?start=0]
* Vue components allows you to create your own HTML tags.
  * Because of this we cannot duplicate the name.
  * It is a good idea to come up with a standard prefix for template names so you do not accidentally pick a already defined tag. E.g. hashrebel-, rebel-, etc.
* You can register components globally through Vue.component() (I think .use also works but you need to have an install function setup) or you can use the component property when creating new Vue{} to scope it to that vue instance.

### Questions

* _What does that '#' mean in this case or more generally in HTML. In links ```<a href="">``` the # means to stay in the current directive. You can use it to reference (or in the case of link; link to) a different directive via id.

### Got'chas

* The el attribute requires the #. Looking for good documentation to explain this.
* You cannot get access to this from inside an enclosed function. In other words functions within a function are scoped different so you need to create a local variable in order to access it
* _Don't forget your ```this.```!_ In the vue object you need to use the this keyword to access data properties (and methods and what not).
* Templates in .vue files must be wrapped in a div. This is due to the fact that the vue element file can only have one root element.
* <style> in a .vue file is globally scoped and needs to be changed to <style scoped></style> if you want it to only effect the single file. In this way you can create completely self contained components.

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
