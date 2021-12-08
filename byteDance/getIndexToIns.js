// getIndexToIns([10, 20, 30, 40, 50], 35) 应返回 3。

function getIndexToIns(arr, num) {
  arr = arr.sort((a, b) => a - b);
  console.log(arr)
  for (let i = 0, len = arr.length; i < len - 1; i++) {
    const target = arr[i],
      next = arr[i + 1];
    if (target >= num) return i;
    else if (target < num && num <= next) return i + 1;
    else continue
  }
  return arr.length
}

console.log(getIndexToIns([5, 3, 20, 3], 5)); // 2
