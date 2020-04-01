/* Stack */

/*
Methodoligy: LIFO or FILO
Functions:
 - stack.push
 - stack.pop
 - stack.peek
 - stack.length
Feature in JS: Array
*/

var letters = []; // this will be our stack

var word = 'kevivek';

var rword = '';

for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

for (var i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (word === rword) {
  console.log(word + ' is a palindrome.');
} else {
  console.log(word + ' is not a palindrome.');
}
