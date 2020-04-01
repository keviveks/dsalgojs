/* Stack */

/*
Methodoligy: LIFO or FILO
Functions:
 - stack.push
 - stack.pop
 - stack.peek
 - stack.length/stack.size
Feature in JS: Array
*/

var Stack = function() {
  this.count = 0;
  this.storage = {};

  // Adds a vlaue onto the end of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  }

  // Removes and returns the value at the end of the stack
  this.pop = function() {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  // Returns the value at the end of the stack
  this.peek = function() {
    return this.storage[this.count-1];
  }

  this.size = function() {
    return this.count;
  }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push('keviveks');
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
