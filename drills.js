const Stack = require('./stack');
const Queue = require('./queue');

function peek(stack) {
  return stack.top;
}

function isEmpty(stack) {
  if (stack.top === null) {
    console.log('Stack is empty');
    return null;
  }
}
function display(stack) {
  let top = stack.top;
  let current = stack.top;
  let list = [];
  if (top === null) {
    console.log('Stack is empty');
    return;
  }
  while (current !== null) {
    list.push(current.data);
    current = current.next;
  }
  return list;
}
function main() {
  const starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  console.log(display(starTrek));
  console.log(starTrek.pop());
  console.log(starTrek.pop());
  console.log(display(starTrek));
}
function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let stack = new Stack();

  stack.push(s);

  console.log(display(stack));
}

// True, true, true, false
console.log(is_palindrome('dad'));
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('1001'));
console.log(is_palindrome('Tauhida'));
