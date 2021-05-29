/**
 * 把数组排成最小的数
 *
 * 题目描述
 * 输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值，要求时间复杂度为O(n)
 *
 * 示例:
 * 输入: nums = [6,-3,-2,7,-15,1,2,2]
 * 输出: 8
 * 解释: 连续子向量的最大和为8(从第0个开始,到第3个为止)
 *
 * 思路分析
 * 1. 记录一个当前连续子数组最大值 max 默认值为数组第一项
 * 2. 记录一个当前连续子数组累加值 sum 默认值为数组第一项
 * 3. 从数组第二个数开始，若 sum<0 则当前的sum不再对后面的累加有贡献，sum = 当前数
 * 4. 若 sum>0 则sum = sum + 当前数
 * 5. 比较 sum 和 max ，max = 两者最大值
 */

/**
 * @param {number[]} nums
 * @returns {number}
 */
const findGreatestSumOfSubArray = function (nums) {
  let max = nums[0],
    sum = nums[0];
  for (let i = 1, len = nums.length; i < len; i++) {
    if (sum + nums[i] < 0) {
      break;
    } else {
      sum += nums[i];
    }
  }
  if (sum < max) return max;
  return sum;
};

console.log(findGreatestSumOfSubArray([6, -3, -2, 7, -15, 1, 2, 2]));
