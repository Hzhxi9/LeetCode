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
 * 解法一
 * 1. 开辟一个额外空间存储每个值出现的次数，时间复杂度最大为O(n)
 *
 * 解法二
 * 1. 目标值的个数比其他所有值加起来的数多
 * 2. 记录两个变量 1.数组中的某个值 2.次数
 * 3. 当前遍历值和上一次遍历值相等？次数+1 ： 次数-1。
 * 4. 次数变为0后保存新的值。
 * 5. 遍历结束后保存的值,判断其是否复合条件
 */

/**
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
    if (result[key] > nums.length / 2) return key;
  }
  return 0;
};

/**
 * @param {number[]} nums
 * @returns {number}
 */
const moreThanHalfNumSolution = function (nums) {
  let target = nums[0],
    count = 1;
  for (let i = 0, len = nums.length; i < len; i++) {
    if (target) {
      count = target === nums[i] ? count + 1 : count - 1;
    }
    if (count === 0) {
      target = nums[i];
      count = 1;
    }
  }
  count = 0;
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] === target) count++;
  }
  return count > nums.length / 2 ? count : 0;
};

/**Debug */
console.log(moreThanHalfNumSolution([1, 2, 3, 2, 2, 2, 5, 4, 2]));
