# Big O

## General tips

1. Every time we iterate through an array it is most likely to be `O(n)`

   ```javascript
   // n = length of the array
   const nums: nums[] = [1, 2, 3, 4, 5];
   for (let num of nums) {
     // code...
   }
   ```

2. When you see the number of elements in the problem gets halved each time that is `O(logn)`

   ```javascript
   while (start <= end) {
     // Find the mid index
     let mid = Math.floor((start + end) / 2);

     // If element is present at mid, return True
     if (arr[mid] === x) return true;
     // Else look in left or right half accordingly
     else if (arr[mid] < x) start = mid + 1;
     else end = mid - 1;
   }
   ```

3. Whenever you have a singly nested loop it is most likely to be `O(n^2)`

   ```javascript
   const nums1: number[] = [1, 2, 3, 4, 5];
   const nums2: number[] = [6, 7, 8, 9, 10];

   for (let num of nums1) {
     for (let nums2 of nums2) {
       // code...
     }
   }
   ```

### O(nlog3(n))

```javascript
// Initializations
const n = 10;
const pie = 3.14;
let sum = 0;
var j = 1;

for (var i = 1; i < n; i += 3) {
  console.log(pie);
  while (j < n) {
    sum = sum + 1;
    j *= 3;
  }
  j = 1;
}
console.log(sum);
```

The outer loop index i goes: `1,4,7,10,...,n` That means that the outer loop has n/3 iterations

The inner loop index j goes: `1,3,9,27,...,n` hat means that a complete run of the inner loop has log3(n) iterations.

### O(nlog2(n))

```javascript
// Initializations
const n = 10;
const pie = 3.14;
let sum = 0;

for (var i = 0; i < n; i++) {
  var j = 1;
  console.log(pie);
  while (j < i) {
    sum += 1;
    j *= 2;
  }
}
console.log(sum);
```

The outer loop is `O(n)` as it iterates `n` times. The inner while loop iterates `i` times, which is always `less than` `n` and the innerr loop counter variable is doubled each time. Therefore we can say that it is O(log2(n)). This, the total time complexity of the program given above becomes: `O(log2(n))`
