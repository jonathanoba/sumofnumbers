
const arrOfNumbers = [1, 2, 3, 4];

function sumFor(arr) {
  let total = 0;
  for (const num of arr) {
    total += num;
  }
  return total;
}

console.log(sumFor(arrOfNumbers));

function sumWhile(arr) {
  let total = 0;
  let i = 0;
  while (i < arr.length) {
    total += arr[i];
    i++;
  }
  return total;
}

console.log(sumWhile(arrOfNumbers));

function sumRecursion(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumRecursion(arr.slice(1, arr.length));
}

console.log(sumRecursion(arrOfNumbers));

function sumTheSimpleWay(arr) {
  return _.reduce(arr, (memo, num) => (memo + num), 0);
}

console.log(sumTheSimpleWay(arrOfNumbers));
