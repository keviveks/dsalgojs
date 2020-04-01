/* Set */

/*
Sets are kind of an array except there is no duplicate item and not in any order
Useage:
- Check the presence of the item
ES6 already has a buildin set object (doesnot contains all the methods that are common to sets)
*/

// mySet: to differentiate from es6 Set
function mySet() {
  // collections (array) hold the set
  var collections = [];
  // method will check for the presence of element & return boolean
  this.has = function(element) {
    return (collections.indexOf(element) !== -1);
  };
  // add the elements to the first
  this.add = function(element) {
    if (!this.has(element)) {
      collections.push(element);
      return true;
    }
    return false;
  };
  // method will remove the element from the set
  this.remove = function(element) {
    if (this.has(element)) {
      var index = collections.indexOf(element);
      collections.splice(index, 1);
      return true;
    }
    return false;
  };
  // returns the set collection
  this.values = function() {
    return collections;
  };
  // will return the collection length
  // in ES6 size is a property
  this.size = function() {
    return collections.length;
  };
  // will return the union of two sets
  this.union = function(otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function(e) {
      unionSet.add(e);
    });
    secondSet.forEach(function(e) {
      unionSet.add(e);
    });
    return unionSet;
  };
  // will return the intersection of two sets as a new set
  this.intersection = function(otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function(e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };
  // will return the difference between sets as a new set
  this.difference = function(otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function(e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });

    return differenceSet;
  };
  // will test if the set is a subset of a different set return boolean
  this.subset = function(otherSet) {
    var firstSet = this.values();
    return firstSet.every(function(e) {
      return otherSet.has(e);
    });
  };
}

var setA = new mySet();
var setB = new mySet();
setA.add('a');
setB.add('b');
setB.add('c');
setB.add('a');
setB.add('d');
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

var setC = new Set();
var setD = new Set();
setC.add('a');
setD.add('b');
setD.add('c');
setD.add('a');
setD.add('d');
console.log(setD.values());
console.log(setD.has('a'));
setD.delete('a');
console.log(setD.has('a'));
console.log(setD.add('d'));
