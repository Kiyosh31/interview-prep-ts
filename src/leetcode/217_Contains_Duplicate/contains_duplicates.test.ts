import { containsDuplicate } from "./contains_duplicate";

describe("contains duplicates", () => {
  it("case 1", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toStrictEqual(true);
  });

  it("case 2", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toStrictEqual(false);
  });

  it("case 3", () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toStrictEqual(
      true
    );
  });
});
