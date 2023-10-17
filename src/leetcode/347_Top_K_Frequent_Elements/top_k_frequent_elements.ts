/**
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 */

export const topKFrequent = (nums: number[], k: number): number[] => {
  const res: number[] = [];
  const map = new Map<number, number>();

  for (let num of nums) {
    if (map.has(num)) {
      map.set(num, (map.get(num) || 1) + 1);
    } else {
      map.set(num, 1);
    }
  }

  for (let [key, value] of map) {
    if (value >= k) {
      res.push(key);
    }
  }

  return res;
};
