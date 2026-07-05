import { describe, it, expect } from "vitest";
import { merge } from "./page/sortpage/merge";

describe("merge", () => {
  it("Happy Case — c1 desc, c2 asc from 0, c3 asc from 0", () => {
    // c1: 9,5,2 (desc) | c2: 1,4,7 (asc, min=0+) | c3: 3,6,8 (asc, min=0+)
    expect(merge([9, 5, 2], [1, 4, 7], [3, 6, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("Empty Case", () => {
    expect(merge([], [], [])).toEqual([]);
  });

  it("c1 descending, c2 and c3 start from 0", () => {
    // c2 and c3 start exactly at 0
    expect(merge([7, 4, 1], [0, 5, 9], [0, 3, 8])).toEqual([0, 0, 1, 3, 4, 5, 7, 8, 9]);
  });

  it("c2 starts at 0", () => {
    expect(merge([5, 3], [0, 2, 4], [1, 6])).toEqual([0, 1, 2, 3, 4, 5, 6]);
  });

  it("c3 starts at 0", () => {
    expect(merge([5, 3], [1, 2, 4], [0, 6])).toEqual([0, 1, 2, 3, 4, 5, 6]);
  });

  it("Single element arrays", () => {
    expect(merge([3], [0], [2])).toEqual([0, 2, 3]);
  });

  it("One empty collection", () => {
    // c1: 5,3,1 (desc) | c2: 0,2,4 (asc from 0) | c3: empty
    expect(merge([5, 3, 1], [0, 2, 4], [])).toEqual([0, 1, 2, 3, 4, 5]);
  });

  it("Duplicate values including 0", () => {
    // c1: 3,1 (desc) | c2: 0,1,3 (asc from 0) | c3: 0,2 (asc from 0)
    expect(merge([3, 1], [0, 1, 3], [0, 2])).toEqual([0, 0, 1, 1, 2, 3, 3]);
  });
});
