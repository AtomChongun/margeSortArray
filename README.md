# Merge Sorted Arrays

A React + TypeScript web application that merges three collections into a single ascending-sorted array using a 3-way merge algorithm — no sort functions used.

🚀 **Live Demo:** [https://marge-sort-array.vercel.app/](https://marge-sort-array.vercel.app/)

---

## Problem Statement

Implement the function:

```ts
merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]
```

**Given:**
- `collection_1` — already sorted **descending** (max → min)
- `collection_2` — already sorted **ascending** (min(0) → max)
- `collection_3` — already sorted **ascending** (min(0) → max)

**Returns:** a single array sorted **ascending**

> ⚠️ No sort functions allowed

---

## Algorithm

1. **Reverse** `collection_1` using two-pointer swap → converts descending to ascending
2. **3-way merge** — compare the current head of all three arrays, pick the smallest, advance that pointer
3. Repeat until all elements are consumed

**Time complexity:** O(n) where n = total number of elements across all collections

---

## Project Structure

```
src/
├── page/sortpage/
│   ├── merge.ts        ← core merge algorithm
│   ├── sort.tsx        ← UI page
│   └── sort.css
├── component/tagInput/
│   ├── tagInput.tsx    ← tag input component
│   └── tagInput.css
└── merge.test.ts       ← unit tests
```

---

## Setup & Run

**Install dependencies**
```bash
npm install
```

**Start development server**
```bash
npm run dev
```

**Run unit tests**
```bash
npm run test
```

**Build for production**
```bash
npm run build
```

---

## Unit Tests

```bash
npm run test
```

Expected output:
```
✓ merge > Happy Case — c1 desc, c2 asc from 0, c3 asc from 0
✓ merge > Empty Case
✓ merge > c1 descending, c2 and c3 start from 0
✓ merge > c2 starts at 0
✓ merge > c3 starts at 0
✓ merge > Single element arrays
✓ merge > One empty collection
✓ merge > Duplicate values including 0

Test Files  1 passed (1)
     Tests  8 passed (8)
```

---

## Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
