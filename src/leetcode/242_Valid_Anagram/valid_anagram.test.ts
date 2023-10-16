import { isAnagram } from "./valid_anagram";

describe("isAnagram", () => {
  it("case1", () => {
    expect(isAnagram("anagram", "nagaram")).toStrictEqual(true);
  });

  it("case2", () => {
    expect(isAnagram("rat", "car")).toStrictEqual(false);
  });

  it("case3", () => {
    expect(isAnagram("ab", "a")).toStrictEqual(false);
  });

  it("case4", () => {
    expect(isAnagram("a", "ab")).toStrictEqual(false);
  });
});
