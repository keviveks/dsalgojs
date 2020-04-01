/* PriorityQueue */

/*
FIFO
In PriorityQueue we will pass the priority of the element along with its value
It accepts array as params with index 0 -> value & 1 -> priority
*/

function PriorityQueue() {
  collection = [];
  this.enqueue = function(element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      var added = false;
      for(var i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };
  this.dequeue = function() {
    var result = collection.shift();
    return result[0];
  };
  this.front = function() {
    return collection[0];
  };
  this.printCollection = function() {
    console.log(collection);
  };
  this.size = function() {
    return collection.length;
  };
  this.isEmpty = function() {
    return (collection.length === 0);
  };
}

var pq = new PriorityQueue();
pq.enqueue(['Prior 2', 2]);
pq.enqueue(['Prior 3', 3]);
pq.enqueue(['Prior 1', 1]);
pq.enqueue(['Prior 22', 2]);
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();
