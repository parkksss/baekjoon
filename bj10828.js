let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const stack = [];

for (let i = 1; i <= parseInt(input[0]); i++) {
  const action = input[i].split(' ');
  const command = action[0];

  switch (command) {
    case 'push':
      stack.unshift(action[1]);
      break;
    case 'pop':
      stack[0] ? console.log(stack[0]) : console.log('-1');
      stack.pop()
      break;
    case 'size':
      console.log(stack.length);
      break;
    case 'empty':
      stack[0] ? console.log('0') : console.log('1');
      break;
    case 'top':
      stack[0] ? console.log(stack[0]) : console.log('-1');
      break;
    default:
      break;
  }

}