import { topKFrequent } from "./top_k_frequent_elements";

describe("topKFrequent", () => {
  it("case1", () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toStrictEqual([1, 2]);
  });

  it("case2", () => {
    expect(topKFrequent([1], 1)).toStrictEqual([1]);
  });

  it("case3", () => {
    expect(topKFrequent([1, 2], 2)).toStrictEqual([1, 2]);
  });
});
