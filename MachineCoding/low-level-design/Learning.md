## JS and React Knowledge bits

### Sorting

In JS we have a sort method but its usage for string and number differs. Remember takeaways - Array.sort method sorts array in place - meaning it modifies the original array. We can use toSorted() to avoid in place

- Numeric Values
  If your value property contains numbers, you can sort them by subtracting one property from the other.

  ```
  const array = [
  { id: 1, value: 34 },
  { id: 2, value: 12 },
  { id: 3, value: 45 }
  ];

  array.sort((a, b) => a.value - b.value);
  ```

- String Values
  If your value property contains words or text strings, use localeCompare() to handle alphabetical sorting correctly.

  ```
  const array = [
  { id: 1, value: "Banana" },
  { id: 2, value: "Apple" },
  { id: 3, value: "Cherry" }
  ];

  array.sort((a, b) => a.value.localeCompare(b.value));
  ```
