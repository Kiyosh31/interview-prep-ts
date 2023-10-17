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

  [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .forEach((v) => {
      res.push(v[0]);
    });

  return res;
};
