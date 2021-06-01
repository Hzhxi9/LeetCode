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
  /**循环次数, 最后一位一定是最大 */
  let len = array.length - 1;
  for (let i = 0; i < len; i++) {
    let complete = true;
    /**比较次数， 每次比较都少一次 */
    for (let j = 0; j < len - i; j++) {
      /**判断条件，满足条件，交换变量 */
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
        complete = false;
      }
    }
    /** 没有冒泡结束循环 */
    if (complete) break;
  }

  return array;
};

/**Debug */
console.log(bubbleSort([10, 50, 30, 20]));
