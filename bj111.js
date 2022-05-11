let fs = require('fs');
// 백준 : '/dev/stdin'
//한 줄 입력
// let input = fs.readFileSync('./input.txt').toString().split(' ').map(Number);
//여러 줄 입력
const input = fs.readFileSync('./input.txt').toString().split('\n');

// const [n, ...nums] = input;
const info = input[0].split(' ');
const num = input[1].split(' ');
let queueL = parseInt(info[0])
const mid = Math.ceil(queueL/2);
// const numbers = nums.map(n => Number(n));
const queue = [];
let point = 0;
let back = 0;
let count = 0;

for (let i = 0; i< queueL; i++) {
  queue.push(i+1);
}
for (let i = 0; i < parseInt(info[1]); i++) {
  const target = parseInt(num[i]);
  if (Math.abs(queue[point]-target) < mid) {
    while(queue[point] < target) {
      point++;
      count++;
      console.log("순방향 실행 ::", point, queue[point], count);
    }
    queue.splice(point, 1);
    queueL--;
    console.log("최종 도착!", queue, count);
  } else {
    while(queue[point] !== target) {
      if (point !== 0){
        point--;
      } else {
        point = queueL-1;
      }
      count++;
      // return;
      console.log("역방향 실행 ::", point, queue[point], count);
    }
    queue.splice(point, 1);
    queueL--;
    console.log("최종 도착!", queue, count);
  }

}

return;
for (let i = 0; i < parseInt(info[1]); i++) {
  const action = nums[i].split(' ');
  const command = action[0];

  switch (command) {
    case 'push':
      queue.push(parseInt(action[1]));
      back++;
      break;
    case 'pop':
      if (queue[point]) {
        console.log(queue[point]);
        delete queue[point];
        point++;
      } else {
        console.log(-1);
      }
      break;
    case 'size':
      console.log(back-point);
      break;
    case 'empty':
      (point === back) ? console.log(1) : console.log(0);
      break;
    case 'front':
      (point === back) ? console.log(-1) : console.log(queue[point])
      break;
    case 'back':
      (point === back) ? console.log(-1) : console.log(queue[back-1])
      break;
    default:
      break;
  }

}
