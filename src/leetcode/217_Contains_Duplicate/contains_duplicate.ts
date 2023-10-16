/**
 * https://leetcode.com/problems/contains-duplicate/
 */

// o(n)
export const containsDuplicate = (nums: number[]): boolean => {
  const map = new Map<number, number>();

  for (let num of nums) {
    if (map.get(num) !== undefined) {
      return true;
    }
    map.set(num, 1);
  }

  return false;
};
