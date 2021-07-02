/**1 */
function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
}
console.log(bubbleSort([10, 50, 30, 90, 40, 80, 70]));

/**2 */
function quickSort(arr) {
  if (arr.length < 1) return arr;

  const m = ~~(arr.length >> 1),
    left = [],
    right = [],
    midArr = arr.splice(m, 1);

  for (let i = 0, len = arr.length; i < len; i++) {
    const target = arr[i];
    target < midArr ? left.push(target) : right.push(target);
  }

  return [...quickSort(left), ...midArr, ...quickSort(right)];
}
console.log(quickSort([10, 50, 30, 90, 40, 80, 70]));

/**3 */
function selectSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) min = j;
    }
    if (min !== i) [arr[min], arr[i]] = [arr[i], arr[min]];
  }
  return arr;
}
console.log(selectSort([10, 50, 30, 90, 40, 80, 70]));

/**4 */
function insertSort(arr) {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    let target = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[target]) {
        [arr[j], arr[target]] = [arr[target], arr[j]];
        target = j;
      } else {
        break;
      }
    }
  }
  return arr;
}
console.log(insertSort([10, 50, 30, 90, 40, 80, 70]));

/**5 */
function merge(arr, l, r, temp) {
  const m = ~~((l + r) >> 1);

  let left = l,
    right = m + 1,
    k = 0;

  while (left <= m && right <= r) {
    if (arr[left] < arr[right]) temp[k++] = arr[left++];
    else temp[k++] = arr[right++];
  }

  while (left <= m) temp[k++] = arr[left++];
  while (right <= r) temp[k++] = arr[right++];

  k = 0;
  for (let i = l; i <= r; i++) arr[i] = temp[k++];
}
function mergeSort(arr, l, r, temp) {
  if (l < r) {
    const m = ~~((r + l) >> 1);
    mergeSort(arr, l, m, temp);
    mergeSort(arr, m + 1, r, temp);
    merge(arr, l, r, temp);
    return arr;
  }
}
console.log(
  mergeSort(
    [10, 50, 30, 90, 40, 80, 70],
    0,
    [10, 50, 30, 90, 40, 80, 70].length - 1,
    []
  )
);

/**6 */
function shellSort(arr) {
  const len = arr.length;
  for (let gap = ~~(len >> 1); gap > 0; gap = ~~(gap >> 1)) {
    for (let i = 0; i < len; i++) {
      let j = i,
        current = arr[i];

      while (j - gap > 0 && arr[j - gap] > current) {
        arr[j] = arr[j - gap];
        j = j - gap;
      }
      arr[j] = current;
    }
  }
  return arr;
}
console.log(shellSort([10, 50, 30, 90, 40, 80, 70]));

/**7 */
function adjust(array, target, len) {
  for (let i = 2 * target + 1; i < len; i = 2 * i + 1) {
    if (i + 1 < len && array[i + 1] > array[i]) i = i + 1;

    if (array[i] > array[target]) {
      [array[i], array[target]] = [array[target], array[i]];
      target = i;
    } else {
      break;
    }
  }
}

function buildHeap(array) {
  const len = array.length,
    start = ~~(len >> 1) - 1;

  for (let i = start; i >= 0; i--) adjust(array, i, len);
}

function heapSort(array) {
  buildHeap(array);
  const len = array.length;
  for (let i = len - 1; i > 0; i--) {
    [array[i], array[0]] = [array[0], array[i]];
    adjust(array, 0, i);
  }
  return array;
}

console.log(heapSort([10, 50, 30, 90, 40, 80, 70]));
