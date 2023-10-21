export const iterativeBinarySearch = (
  arr: number[],
  target: number
): boolean => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};

export const recursiveBinarySearch = (
  arr: number[],
  target: number,
  start: number,
  end: number
): boolean => {
  if (start >= end) return false;

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return true;
  } else if (arr[mid] > target) {
    return recursiveBinarySearch(arr, target, start, mid - 1);
  } else {
    return recursiveBinarySearch(arr, target, mid + 1, end);
  }
};
