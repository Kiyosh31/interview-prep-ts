/**
 * https://leetcode.com/problems/two-sum/
 */

// O(n)
export const twoSum = (nums: number[], target: number): number[] => {
  const map = new Map<number, { val: number; idx: number }>();
  const res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    const value = map.get(diff);
    if (value) {
      res.push(value.idx);
      res.push(i);
      break;
    }

    map.set(nums[i], { val: diff, idx: i });
  }

  return res;
};
