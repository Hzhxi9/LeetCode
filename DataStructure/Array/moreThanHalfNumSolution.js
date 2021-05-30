/**
 * 数组中出现次数超过数组长度一半的数字
 *
 * 题目描述
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 *
 * 示例:
 * 输入: nums = [1,2,3,2,2,2,5,4,2]
 * 输出: 2
 * 解释: 一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
 *
 * 思路分析
 * 1. 开辟一个额外空间存储每个值出现的次数，时间复杂度最大为O(n)
 */

/**
 *
 * @param {number[]} nums
 * @returns {number}
 */
const moreThanHalfNumSolution = (nums) => {
  const result = nums.reduce((acc, cur) => {
    if (acc[cur] !== undefined) {
      acc[cur] += 1;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});
  for (const key in result) {
    if (result[key] > nums.length / 2) return result[key];
  }
  return 0;
};

/**Debug */
console.log(moreThanHalfNumSolution([1, 2, 3, 2, 2, 2, 5, 4, 2]));
