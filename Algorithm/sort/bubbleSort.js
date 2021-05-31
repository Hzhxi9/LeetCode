/**
 *  冒泡排序
 *
 *  思想
 *  循环数组，比较当前元素和下一个元素，如果当前元素比下一个元素大，向上冒泡。
 *  这样一次循环之后最后一个数就是本数组最大的数。
 *  下一次循环继续上面的操作，不循环已经排序好的数。
 *  优化：当一次循环没有发生冒泡，说明已经排序完成，停止循环
 *
 */

/**
 *
 * @param {number[]} array
 * @return {number[]}
 */
const bubbleSort = function (array) {
  for (let i = 0, len = array.length - 1; i < len; i++) {
    let complete = true;

    for (let j = 0, len = array.length - 1 - i; j < len; j++) {
      console.log(array[j], i);
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
        complete = false;
      }
    }
    // if (complete) break;
  }

  return array;
};
z;

/**Debug */
console.log(bubbleSort([10, 50, 30, 20]));
