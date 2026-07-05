
export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  // Reverse collection_1 (descending) to ascending using two-pointer swap — no sort
  const c1 = [...collection_1];
  let lo = 0;
  let hi = c1.length - 1;
  while (lo < hi) {
    const tmp = c1[lo];
    c1[lo] = c1[hi];
    c1[hi] = tmp;
    lo++;
    hi--;
  }

  // collection_2 and collection_3 are already ascending — use them directly
  // 3-way merge: pick the smallest head from each array each iteration
  const result: number[] = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < c1.length || j < collection_2.length || k < collection_3.length) {
    const a = i < c1.length ? c1[i] : Infinity;
    const b = j < collection_2.length ? collection_2[j] : Infinity;
    const c = k < collection_3.length ? collection_3[k] : Infinity;

    if (a <= b && a <= c) {
      result.push(a);
      i++;
    } else if (b <= a && b <= c) {
      result.push(b);
      j++;
    } else {
      result.push(c);
      k++;
    }
  }

  return result;
}
