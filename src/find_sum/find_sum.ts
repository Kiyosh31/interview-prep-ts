/**
 * Problem Statement
 * In this problem, you have to implement the findSum(arr, value) function,
 * which takes an array arr, a number and value as input and returns an array of two numbers that add up to value.
 */

// O(nlog(n))
export const findSum = (arr: number[], value: number): number[] => {
  arr.sort((a, b) => a - b);

  let first = 0;
  let end = arr.length - 1;
  const result = [];
  let sum = 0;

  while (first != end) {
    sum = arr[first] + arr[end];

    if (sum < value) {
      first++;
    } else if (sum > value) {
      end--;
    } else {
      result.push(arr[first]);
      result.push(arr[end]);
      return result;
    }
  }

  return [];
};

const res: number[] = findSum([1, 21, 3, 14, 5, 60, 7, 6], 81);
console.log(res);
