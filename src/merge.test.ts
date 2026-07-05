import { describe, it, expect } from "vitest";
import { merge } from "./page/sortpage/merge";

describe("merge", () => {
  it("Happy Case — c1 desc, c2 asc, c3 asc", () => {
    // c1: 9,5,2 (desc), c2: 1,4,7 (asc), c3: 3,6,8 (asc)
    expect(merge([9, 5, 2], [1, 4, 7], [3, 6, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("Empty Case", () => {
    expect(merge([], [], [])).toEqual([]);
  });

  it("c1 unsorted → auto-sorted desc before merge", () => {
    // c1 ไม่เรียง → ระบบเรียง desc ให้ก่อน
    expect(merge([1, 7, 4], [2, 5, 9], [3, 6, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("c2 unsorted → auto-sorted asc before merge", () => {
    // c2 ไม่เรียง → ระบบเรียง asc ให้ก่อน
    expect(merge([9, 5, 2], [7, 1, 4], [3, 6, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("c3 unsorted → auto-sorted asc before merge", () => {
    // c3 ไม่เรียง → ระบบเรียง asc ให้ก่อน
    expect(merge([9, 5, 2], [1, 4, 7], [8, 3, 6])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("Single element arrays", () => {
    expect(merge([3], [1], [2])).toEqual([1, 2, 3]);
  });

  it("One empty collection", () => {
    expect(merge([5, 3, 1], [2, 4], [])).toEqual([1, 2, 3, 4, 5]);
  });

  it("Duplicate values", () => {
    expect(merge([3, 1], [1, 3], [2])).toEqual([1, 1, 2, 3, 3]);
  });
});
