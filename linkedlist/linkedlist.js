/* Linked List */

var LinkedList = function() {
  var head = null;
  var length = 0;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.add = function(element) {
    let node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;
      while(currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  }

  this.remove = function(element) {
    var currentNode = head;
    var previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while(currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
  }

  this.size = function() {
    return length;
  }

  this.head = function() {
    return head;
  }

  this.isEmpty = function() {
    return length === 0;
  }

  this.indexOf = function(element) {
    var currentNode = head;
    var index = -1;
    while(currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  }

  this.elementAt = function(index) {
    var currentNode = head;
    var count = 0;
    while(count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  }

  this.addAt = function(index, element) {
    var node = new Node(element);
    var currentNode = head;
    var previousNode;
    var currentIndex = 0;
    if (index > length) {
      return false;
    }

    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while(currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    length++;
    return true;
  }

  this.removeAt = function(index) {
    var currentNode = head;
    var previousNode;
    var currentIndex = 0;
    if (index < 0 || index >= length) {
      return null;
    }
    if (index === 0) {
      head = currentNode.next;
    } else {
      while(currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
    return currentNode.element;
  }
}

var ll = new LinkedList();
ll.add('kitty');
ll.add('puppy');
ll.add('dog');
ll.add('cat');
ll.add('fish');
ll.add('dino');

console.log(ll.size());
console.log(ll.removeAt(2));
console.log(ll.addAt(4, 'dggy'));
// console.log(ll.head());
console.log(ll.indexOf('cat'));
console.log(ll.elementAt(2));
console.log(ll.elementAt(4));
console.log(ll.size());
