let fs = require('fs');
// 백준 : '/dev/stdin'
//한 줄 입력
// let input = fs.readFileSync('./input.txt').toString().split(' ').map(Number);
//여러 줄 입력
const input = fs.readFileSync('./input.txt').toString().split('\n');

const [n, ...nums] = input;
const heap = [];

const heapify = (arr) => {
  const length = arr.length;
  if(length <= 1) return;
  for(let i = Math.floor(length/2); i>=0; i--){
    max_heapify(arr, i, length);
  }
}

const max_heapify = (a, i, length) => {
  let left = i*2 + 1;
  let right = i*2 + 2;
  let parent = i;

  if (left < length && a[left] > a[parent]) {
    parent = left;
  }
  if (right < length && a[right] > a[parent]) {
    parent = right;
  }
  if (i != parent) {
    swap(a, i, parent);
    max_heapify(a, parent, length);
  }
}

const swap = (a,i,j) => {
  let tmp = a[i];
  a[i] = a[j];
  a[j] = tmp;
}

const _insert = (arr, data) => {
  arr.push(data);
  let i = arr.length -1;
  while(i > 0) {
    const parent = Math.floor((i-1)/2);
    if(arr[parent] > arr[i]) break;

    swap(arr, i, parent);
    i = parent;
  }
  return arr;
}

const _delete = (arr) => {
  swap(arr, 0, arr.length-1);
  const max = arr.pop();
  heapify(arr);

  return max;
}

for (let i = 0; i < parseInt(n); i++) {
  if ((nums[i]) == 0) {
    const max = _delete(heap);
    max ? console.log(max) : console.log(0) 
  } else {
    _insert(heap, nums[i]);
  }
}
