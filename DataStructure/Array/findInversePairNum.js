/**
 * 数组中的逆序对
 *
 * 题目描述
 * 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组,求出这个数组中的逆序对的总数P。
 *
 * 思路分析
 * 暴力法
 * 从第一个数开始，依次和后面每一个数字进行比较记录逆序对的个数，时间复杂度O(n2)
 *
 * 分治
 * 直接将归并排序进行改进，把数据分成N个小数组。
 * 合并数组 left - mid , mid+1 - right，合并时， 若array[leftIndex] > array[rightIndex] ,则比右边 rightIndex-mid个数大count += rightIndex-mid
 * 注意和归并排序的区别： 归并排序是合并数组数从小数开始，而本题是从大数开始。
 *
 */

/**
 *
 * @param {number[]} nums
 * @returns {number}
 */
// const findInversePairNum = function (nums) {
//   const result = {};
//   for (let i = 0, len = nums.length; i < len; i++) {
//     for (let j = 1, len = nums.length; j < len; j++) {
//       if (nums[i] > nums[j]) {
//         result[i] = nums[j];
//       }
//     }
//   }
//   return Object.keys(result).length;
// };

/**
 * @param {number[]} nums 
 * @returns {number}
 */
const findInversePairNum = function (nums) {
  let count = 0;
  for (let i = 0, len = nums.length; i < len; i++) {
    for (let j = i + 1, len = nums.length; j < len; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
  }
  return count;
};

console.log(findInversePairNum([1, 2, 3, 4, 5, 6, 7, 0]));
