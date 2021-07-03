function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
}

console.log(bubbleSort([20, 10, 30, 50, 40, 50, 60]));

function quickSort(arr) {
  if (arr.length < 1) return arr;
  const m = ~~(arr.length >> 1);

  let left = [],
    right = [],
    target = arr.splice(m, 1);

  for (let i = 0, len = arr.length; i < len; i++) {
    const data = arr[i];
    data < target ? left.push(data) : right.push(data);
  }
  return [...quickSort(left), ...target, ...quickSort(right)];
}
console.log(quickSort([20, 10, 30, 50, 40, 50, 60]));

function selectSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) min = j;
    }
    if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}
console.log(selectSort([20, 10, 30, 50, 40, 50, 60]));

function insertSort(arr) {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    let target = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[target]) {
        [arr[j], arr[target]] = [arr[target], arr[j]];
      } else {
        break;
      }
    }
    arr[i] = arr[target];
  }
  return arr;
}
console.log(insertSort([20, 10, 30, 50, 40, 50, 60]));

function merge(arr, l, r, tmp) {
  const m = ~~((l + r) >> 1);

  let left = l,
    right = m + 1,
    k = 0;

  while (left <= m && right <= r) {
    if (arr[left] < arr[right]) tmp[k++] = arr[left++];
    else tmp[k++] = arr[right++];
  }

  while (left <= m) tmp[k++] = arr[left++];
  while (right <= r) tmp[k++] = arr[right++];

  k = 0;
  for (let i = l; i <= r; i++) arr[i] = tmp[k++];
}

function mergeSort(arr, l, r, tmp) {
  if (l < r) {
    const m = ~~((r + l) >> 1);
    mergeSort(arr, l, m, tmp);
    mergeSort(arr, m + 1, r, tmp);
    merge(arr, l, r, tmp);
  }
  return arr;
}
console.log(
  mergeSort(
    [20, 10, 30, 50, 40, 50, 60],
    0,
    [20, 10, 30, 50, 40, 50, 60].length - 1,
    []
  )
);
