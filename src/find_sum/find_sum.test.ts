import { findSum } from "./find_sum";

it("findSum", () => {
  const input = [1, 21, 3, 14, 5, 60, 7, 6];
  const value = 81;

  expect(findSum(input, value)).toStrictEqual([21, 60]);
});
