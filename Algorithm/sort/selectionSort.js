/**
 *  选择排序
 *
 *  思想
 *  每次循环选取一个最小的数字放到前面的有序序列中。
 */

/**
 * @param {number[]} nums
 * @returns {number[]}
 */
const selectionSort = function (nums) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    /**假设当前i为最小数字索引 */
    let min = i;
    for (let j = i + 1; j < len; j++) {
      /**当下一个索引的值小于当前最小索引的值时，改变最小数字索引 */
      if (nums[j] < nums[min]) min = j;
    }
    /**交换变量 */
    [nums[i], nums[min]] = [nums[min], nums[i]];
  }
  return nums;
};

/**Debug */
console.log(selectionSort([10, 50, 30, 90, 40, 80, 70]));
