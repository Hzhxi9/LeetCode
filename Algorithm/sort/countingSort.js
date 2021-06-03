/**
 *  计数排序
 *  计数排序不是基于比较的排序算法，其核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。 作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。
 *
 *  每个数出现了多少次， 以这个数为下标记录次数，存放在新的数组中
 *
 *  思想
 *  1. 找出待排序的数组中最大和最小的元素；
 *  2. 统计数组中每个值为i的元素出现的次数，存入数组C的第i项；
 *  3. 对所有的计数累加（从C中的第一个元素开始，每一项和前一项相加）；
 *  4. 反向填充目标数组：将每个元素i放在新数组的第C(i)项，每放一个元素就将C(i)减去1。
 *
 *  使用范围
 *  1. 量大且范围小
 */

/**
 * @param {number[]} nums
 * @param {number} max
 * @returns {number[]}
 */
const countingSort = function (nums, max) {
  /** bucket 存放计数的数组，最大数组下标是目标数组的最大值 + 1 */
  let bucket = new Array(max + 1),
    sortedIndex = 0,
    arrLen = nums.length,
    bucketLen = max + 1;

  for (let i = 0; i < arrLen; i++) {
    if (!bucket[[nums[i]]]) {
      /**不存在，就当前下标值的初始化为0 */
      bucket[nums[i]] = 0;
    }
    /**读取某个值，加一, (下标值和nums[i]相等)*/
    bucket[nums[i]]++;
  }

  for (let j = 0; j < bucketLen; j++) {
    while (bucket[j] > 0) {
      /**bucket[j]里面有值时， 重新赋值到nums中, 不断增加下标值， 直到bucket[j] 为0 */
      nums[sortedIndex++] = j;
      /**bucket[j]不断减少 */
      bucket[j]--;
    }
  }

  return nums;
};

/**Debug */
console.log(
  countingSort([1, 3, 7, 6, 9, 8, 2, 3], Math.max(...[1, 3, 7, 6, 9, 8, 2, 3]))
);
