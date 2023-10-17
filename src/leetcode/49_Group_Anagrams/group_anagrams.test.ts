import { groupAnagrams } from "./group_anagrams";

describe("groupAnagrams", () => {
  it("case1", () => {
    expect(
      groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
    ).toStrictEqual([["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]);
  });

  it("case2", () => {
    expect(groupAnagrams([""])).toStrictEqual([[""]]);
  });

  it("case3", () => {
    expect(groupAnagrams(["a"])).toStrictEqual([["a"]]);
  });
});
