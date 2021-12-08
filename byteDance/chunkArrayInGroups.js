function chunkArrayInGroups(arr, size) {
  const len = arr.length;
  const count = Math.ceil(len / size);
  const result = [];

  for (let i = 0; i < count; i++) {
    const start = i * size,
      end = size * i + size > len ? len : size * i + size;

    console.log(start, end);

    result.push([...arr.slice(start, end)]);
  }

  return result;
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)); // [["a", "b"], ["c", "d"]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); // [[0, 1, 2, 3], [4, 5]]
