const arr = [10, 50, 30, 90, 40, 80, 70, 50];
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
console.log(bubbleSort(arr));

/**2 */
function quickSort(arr) {
  if (arr.length < 1) return arr;
  const m = ~~(arr.length >> 1),
    left = [],
    right = [],
    target = arr.splice(m, 1);

  for (let i = 0, len = arr.length; i < len; i++) {
    const item = arr[i];
    item < target ? left.push(item) : right.push(item);
  }
  return [...quickSort(left), ...target, ...quickSort(right)];
}
console.log(quickSort(arr));

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
console.log(selectSort(arr));

/**4 */
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
      arr[i] = arr[target];
    }
  }
  return arr;
}
console.log(insertSort(arr));

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
    const m = ~~((l + r) >> 1);
    mergeSort(arr, l, m, temp);
    mergeSort(arr, m + 1, r, temp);
    merge(arr, l, r, temp);
    return arr;
  }
}
console.log(mergeSort(arr, 0, arr.length - 1, []));

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

      arr[i] = current;
    }
  }
  return arr;
}
console.log(shellSort(arr, 0, arr.length - 1, []));
