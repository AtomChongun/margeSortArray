// Sort array ascending in-place using insertion sort (no built-in sort)
function insertionSortAsc(arr: number[]): void {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

// Sort array descending in-place using insertion sort (no built-in sort)
function insertionSortDesc(arr: number[]): void {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] < key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  // Sort each collection according to spec before merging
  const c1 = [...collection_1];
  const c2 = [...collection_2];
  const c3 = [...collection_3];

  insertionSortDesc(c1); // c1 must be descending (max → min)
  insertionSortAsc(c2);  // c2 must be ascending  (min → max)
  insertionSortAsc(c3);  // c3 must be ascending  (min → max)

  // Reverse c1 to ascending so we can do a standard 3-way merge
  let lo = 0;
  let hi = c1.length - 1;
  while (lo < hi) {
    const tmp = c1[lo];
    c1[lo] = c1[hi];
    c1[hi] = tmp;
    lo++;
    hi--;
  }

  // 3-way merge: pick the smallest head from each array each iteration
  const result: number[] = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < c1.length || j < c2.length || k < c3.length) {
    const a = i < c1.length ? c1[i] : Infinity;
    const b = j < c2.length ? c2[j] : Infinity;
    const c = k < c3.length ? c3[k] : Infinity;

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
