
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const testLength = parseInt(input[0]);

for (let i = 1; i < testLength+1; i ++) {
  const test = input[i].split(' ');
  const h = test[0];
  const w = test[1];
  const n = test[2];
  let floor = (n % h)+'';
  let room = (parseInt(n / h)+1)+''; 

  assign = (room.length === 1) ? floor+'0'+room : floor+room;

  console.log(parseInt(assign));
}