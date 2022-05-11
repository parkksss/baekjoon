let fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n, ...nums] = input;
const heap = [];
let answer = ``;

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
    answer += max ? `${max}\n` : `0\n` 
  } else {
    _insert(heap, nums[i]);
  }
}

console.log(answer);