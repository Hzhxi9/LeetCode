/**
 *  桶排序
 *  桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。
 *  桶排序 (Bucket sort)的工作的原理：假设输入数据服从均匀分布，将数据分到有限数量的桶里，每个桶再分别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排）。
 *
 *  思想
 *  1. 设置一个定量的数组当作空桶；
 *  2. 遍历输入数据，并且把数据一个一个放到对应的桶里去；
 *  3. 对每个不是空的桶进行排序；
 *  4. 从不是空的桶里把排好序的数据拼接起来。
 *
 */

/**
 * @param {number[]} nums
 * @returns {number[]}
 */

const insertSort = require("./insertSort.js");

const bucketSort = function (nums, size = 5) {
  if (!nums.length) return nums;

  let min = nums[0],
    max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      /**写入最小值 */
      min = nums[i];
    } else if (nums[i] > max) {
      /**写入最大值 */
      max = nums[i];
    }
  }

  /**
   * 初始化桶
   * bucketCount 求出桶的范围
   * buckets 每个桶的大小
   */

  let bucketCount = Math.floor((max - min) / size) + 1,
    buckets = new Array(bucketCount);

  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  /**利用映射函数将数据分配到各个桶中 */
  for (let i = 0; i < nums.length; i++) {
    buckets[Math.floor((nums[i] - min) / size)].push(nums[i]);
  }

  nums.length = 0;

  for (let i = 0; i < buckets.length; i++) {
    /**对每个桶进行排序，这里使用了插入排序 */
    const result = insertSort(buckets[i]);
    for (let j = 0; j < result.length; j++) {
      nums.push(result[j]);
    }
  }

  return nums;
};

/**Debug */
console.log(bucketSort([10, 50, 30, 90, 40, 80, 70]));
