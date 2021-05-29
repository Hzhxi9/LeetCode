/**
 * 把数组排成最小的数
 *
 * 题目描述
 * 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
 *
 * 示例:
 * 输入: nums = [3，32，321]
 * 输出: 321323
 */

/**
 *
 * @param {number[]} nums
 * @returns {string}
 */
const printMinNumber = function (nums) {
  if (!nums || !nums.length) return;
  return nums.sort((a, b) => b - a).join("");
};

/**debug */
console.log(printMinNumber([3, 32, 321]));
