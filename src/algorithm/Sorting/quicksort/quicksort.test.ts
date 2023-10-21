import { quicksort } from "./quicksort";

describe("QuickSort", () => {
  it("case 1", () => {
    const nums = [7, 3, 1, 0, 9, 15, 10, 17];
    quicksort(nums, 0, nums.length - 1);
    expect(nums).toStrictEqual([0, 1, 3, 7, 9, 10, 15, 17]);
  });

  it("case 2", () => {
    const nums = [0, 1, 3, 7, 9, 10, 15, 17];
    quicksort(nums, 0, nums.length - 1);
    expect(nums).toStrictEqual([0, 1, 3, 7, 9, 10, 15, 17]);
  });
});
