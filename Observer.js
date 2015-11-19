/*
 * Observer Pattern is a design pattern in which an object (known as the subject) maintains a list of objects depending on what it observes (observers),
 * automatically notifying them of any changes to state. 
 * NOTE!: using ES6
 */
var model = {};

Object.observe(model, function(changes) {
  // async callback
  changes.forEach(function(change) {
    console.log(change.type, change.name, change.oldValue);
  });
});
