import { iterativeBinarySearch, recursiveBinarySearch } from "./binary_search";

describe("Iterative BinarySearch", () => {
  it("case 1", () => {
    const nums = [7, 3, 1, 0, 9, 15, 10, 17];
    expect(iterativeBinarySearch(nums, 15)).toStrictEqual(true);
  });

  it("case 2", () => {
    const nums = [7, 3, 1, 0, 9, 15, 10, 17];
    expect(iterativeBinarySearch(nums, 44)).toStrictEqual(false);
  });
});

describe("Recursive BinarySearch", () => {
  it("case 1", () => {
    const nums = [7, 3, 1, 0, 9, 15, 10, 17];
    expect(recursiveBinarySearch(nums, 15, 0, nums.length - 1)).toStrictEqual(
      true
    );
  });

  it("case 2", () => {
    const nums = [7, 3, 1, 0, 9, 15, 10, 17];
    expect(recursiveBinarySearch(nums, 44, 0, nums.length - 1)).toStrictEqual(
      false
    );
  });
});
