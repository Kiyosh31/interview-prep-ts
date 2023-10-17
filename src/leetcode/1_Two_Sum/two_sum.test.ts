import { twoSum } from "./two_sum";

describe("twoSum", () => {
  it("case1", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
  });

  it("case2", () => {
    expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
  });

  it("case3", () => {
    expect(twoSum([3, 3], 6)).toStrictEqual([0, 1]);
  });
});
